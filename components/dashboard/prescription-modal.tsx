'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, PenTool, Save } from 'lucide-react';

interface PrescriptionModalProps {
  patient: {
    id: string;
    patientName: string;
    avatar: string;
    initials: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

interface Medication {
  name: string;
  dosage: string;
  instructions: string;
  duration: string;
}

export function PrescriptionModal({ patient, isOpen, onClose }: PrescriptionModalProps) {
  const [medications, setMedications] = useState<Medication[]>([
    {
      name: 'Metformin',
      dosage: '500mg',
      instructions: 'Twice daily with meals',
      duration: '30 days',
    },
  ]);
  const [notes, setNotes] = useState('');
  const [currentMedication, setCurrentMedication] = useState<Medication | null>(null);
  const [isSigned, setIsSigned] = useState(false);
  const [step, setStep] = useState<'draft' | 'review' | 'sent'>('draft');

  const handleAddMedication = () => {
    setCurrentMedication({
      name: '',
      dosage: '',
      instructions: '',
      duration: '',
    });
  };

  const handleSaveMedication = () => {
    if (currentMedication) {
      if (medications.some((m) => m.name === currentMedication.name)) {
        setMedications(
          medications.map((m) => (m.name === currentMedication.name ? currentMedication : m))
        );
      } else {
        setMedications([...medications, currentMedication]);
      }
      setCurrentMedication(null);
    }
  };

  const handleRemoveMedication = (index: number) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  const handleSign = () => {
    setIsSigned(true);
    setStep('review');
  };

  const handleSend = () => {
    setStep('sent');
    setTimeout(() => {
      onClose();
      setStep('draft');
      setIsSigned(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-foreground">Create Prescription</DialogTitle>
        </DialogHeader>

        {step === 'sent' ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Send className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Prescription Sent</h3>
            <p className="text-muted-foreground text-sm">The prescription has been sent to {patient.patientName}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Patient Info */}
            <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
              <Avatar>
                <AvatarImage src={patient.avatar} alt={patient.patientName} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {patient.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{patient.patientName}</p>
                <p className="text-xs text-muted-foreground">Patient ID: #PAT-2024-001</p>
              </div>
            </div>

            {/* Medications */}
            <div className="space-y-3">
              <Label className="text-foreground font-semibold">Medications</Label>
              <div className="space-y-2">
                {medications.map((med, index) => (
                  <Card key={index} className="bg-background border-border p-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{med.name}</p>
                          <p className="text-sm text-muted-foreground">Dosage: {med.dosage}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveMedication(index)}
                          className="text-destructive hover:bg-destructive/10"
                        >
                          Remove
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Instructions: {med.instructions}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Duration: {med.duration}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              {currentMedication ? (
                <Card className="bg-background border-border p-4 space-y-3">
                  <Input
                    placeholder="Medication name"
                    value={currentMedication.name}
                    onChange={(e) =>
                      setCurrentMedication({ ...currentMedication, name: e.target.value })
                    }
                    className="bg-card border-border"
                  />
                  <Input
                    placeholder="Dosage (e.g., 500mg)"
                    value={currentMedication.dosage}
                    onChange={(e) =>
                      setCurrentMedication({ ...currentMedication, dosage: e.target.value })
                    }
                    className="bg-card border-border"
                  />
                  <Textarea
                    placeholder="Instructions for use"
                    value={currentMedication.instructions}
                    onChange={(e) =>
                      setCurrentMedication({
                        ...currentMedication,
                        instructions: e.target.value,
                      })
                    }
                    className="bg-card border-border"
                  />
                  <Input
                    placeholder="Duration (e.g., 30 days)"
                    value={currentMedication.duration}
                    onChange={(e) =>
                      setCurrentMedication({ ...currentMedication, duration: e.target.value })
                    }
                    className="bg-card border-border"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSaveMedication}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Save Medication
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setCurrentMedication(null)}
                      className="border-border"
                    >
                      Cancel
                    </Button>
                  </div>
                </Card>
              ) : (
                <Button
                  onClick={handleAddMedication}
                  variant="outline"
                  className="w-full border-border"
                >
                  + Add Medication
                </Button>
              )}
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label className="text-foreground font-semibold">Additional Notes</Label>
              <Textarea
                placeholder="Any additional notes for the patient..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="bg-background border-border min-h-[100px]"
              />
            </div>

            {/* Digital Signature */}
            {!isSigned && (
              <div className="bg-background border-2 border-dashed border-border rounded-lg p-8 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <PenTool className="w-8 h-8 text-muted-foreground mx-auto" />
                  <p className="text-sm text-muted-foreground">
                    Click "Sign" below to digitally sign this prescription
                  </p>
                </div>
              </div>
            )}

            {isSigned && (
              <div className="bg-primary/10 border border-primary rounded-lg p-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-primary rounded-full" />
                <p className="text-sm font-medium text-primary">Prescription signed by Dr. Mossaab</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              {!isSigned ? (
                <>
                  <Button
                    onClick={handleSign}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 flex-1"
                  >
                    <PenTool className="w-4 h-4" />
                    Sign & Review
                  </Button>
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="border-border flex-1"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={handleSend}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 flex-1"
                  >
                    <Send className="w-4 h-4" />
                    Send to Patient
                  </Button>
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="border-border"
                  >
                    Close
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
