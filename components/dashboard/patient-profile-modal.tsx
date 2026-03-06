import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { X } from 'lucide-react';

interface PatientProfileModalProps {
  patient: {
    id: string;
    patientName: string;
    specialty: string;
    avatar: string;
    initials: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const MOCK_PATIENT_DATA = {
  dateOfBirth: 'May 12, 1985',
  gender: 'Female',
  phone: '+1 (555) 123-4567',
  bloodType: 'O+',
  allergies: ['Penicillin', 'Shellfish'],
  medications: ['Metformin 500mg daily', 'Lisinopril 10mg daily'],
  conditions: ['Type 2 Diabetes', 'Hypertension'],
};

export function PatientProfileModal({ patient, isOpen, onClose }: PatientProfileModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Patient Information</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Personal Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={patient.avatar} alt={patient.patientName} />
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                  {patient.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{patient.patientName}</h2>
                <p className="text-muted-foreground">{patient.specialty}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-background p-4 rounded-lg border border-border">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Date of Birth</p>
                <p className="text-sm font-medium text-foreground">{MOCK_PATIENT_DATA.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Gender</p>
                <p className="text-sm font-medium text-foreground">{MOCK_PATIENT_DATA.gender}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Phone</p>
                <p className="text-sm font-medium text-foreground">{MOCK_PATIENT_DATA.phone}</p>
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Medical Information</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-2">Blood Type</p>
                <Badge className="bg-primary text-primary-foreground">
                  {MOCK_PATIENT_DATA.bloodType}
                </Badge>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-2">Allergies</p>
                <div className="flex flex-wrap gap-2">
                  {MOCK_PATIENT_DATA.allergies.map((allergy) => (
                    <Badge key={allergy} variant="outline" className="border-destructive text-destructive">
                      {allergy}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-background p-4 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground mb-3">Chronic Conditions</p>
              <div className="flex flex-wrap gap-2">
                {MOCK_PATIENT_DATA.conditions.map((condition) => (
                  <Badge key={condition} variant="outline" className="border-yellow-500/50 text-yellow-500">
                    {condition}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-background p-4 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground mb-3">Current Medications</p>
              <div className="space-y-2">
                {MOCK_PATIENT_DATA.medications.map((medication) => (
                  <div key={medication} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {medication}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
