'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, CheckCircle2, X, Clock, MessageSquare, Send, Plus, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { CalendarWidget } from '@/components/dashboard/calendar-widget';
import { PatientProfileModal } from '@/components/dashboard/patient-profile-modal';
import { PrescriptionModal } from '@/components/dashboard/prescription-modal';

interface Appointment {
  id: string;
  patientName: string;
  specialty: string;
  time: string;
  avatar: string;
  initials: string;
  status: 'waiting' | 'completed' | 'absent';
  day: number;
  phone?: string;
}

const today = new Date().getDate();
const safe = (offset: number) => {
  const d = today + offset;
  if (d < 1) return today + 5;
  if (d > 28) return today - 5;
  return d;
};

const MOCK_APPOINTMENTS: Appointment[] = [
  { id: '1', patientName: 'Sarah Johnson',  specialty: 'General Checkup', time: '09:00 AM', avatar: 'https://i.pravatar.cc/150?img=1', initials: 'SJ', status: 'waiting',   day: today },
  { id: '2', patientName: 'Michael Chen',   specialty: 'Follow-up',       time: '10:30 AM', avatar: 'https://i.pravatar.cc/150?img=2', initials: 'MC', status: 'waiting',   day: today },
  { id: '3', patientName: 'Emma Davis',     specialty: 'Consultation',    time: '02:00 PM', avatar: 'https://i.pravatar.cc/150?img=3', initials: 'ED', status: 'completed', day: safe(3) },
  { id: '4', patientName: 'James Wilson',   specialty: 'Emergency',       time: '03:30 PM', avatar: 'https://i.pravatar.cc/150?img=4', initials: 'JW', status: 'absent',    day: safe(3) },
  { id: '5', patientName: 'Layla Hassan',   specialty: 'Cardiology',      time: '11:00 AM', avatar: 'https://i.pravatar.cc/150?img=5', initials: 'LH', status: 'waiting',   day: safe(7) },
  { id: '6', patientName: 'Omar Benali',    specialty: 'Dermatology',     time: '03:00 PM', avatar: 'https://i.pravatar.cc/150?img=6', initials: 'OB', status: 'waiting',   day: safe(7) },
];

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const ALL_FEEDBACKS = [
  { name: 'Sarah Johnson', stars: 5, text: 'Excellent consultation. Dr. Mossaab was very thorough and professional.',    date: '2 days ago' },
  { name: 'Michael Chen',  stars: 4, text: 'Great doctor, clear explanations. Very helpful during my appointment.',       date: '1 week ago' },
  { name: 'Emma Davis',    stars: 5, text: 'The treatment plan worked wonderfully. Feeling much better now!',             date: '2 weeks ago' },
  { name: 'James Wilson',  stars: 5, text: 'Dr. Mossaab is very caring and attentive. Highly recommended!',              date: '1 month ago' },
  { name: 'Layla Hassan',  stars: 5, text: 'Very professional and kind. I felt heard and well taken care of throughout.', date: '1 month ago' },
  { name: 'Omar Benali',   stars: 4, text: 'Good diagnosis, clear treatment plan. Would definitely come back.',           date: '2 months ago' },
];

export default function DashboardPage() {
  const [appointments, setAppointments]             = useState(MOCK_APPOINTMENTS);
  const [searchTerm, setSearchTerm]                 = useState('');
  const [selectedAppointments, setSelectedAppointments] = useState<string[]>([]);
  const [selectedPatient, setSelectedPatient]       = useState<Appointment | null>(null);
  const [prescriptionDialogOpen, setPrescriptionDialogOpen] = useState(false);
  const [selectedForPrescription, setSelectedForPrescription] = useState<Appointment | null>(null);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<number | null>(null);
  const [addDialogOpen, setAddDialogOpen]           = useState(false);
  const [showAllFeedback, setShowAllFeedback]         = useState(false);
  const [newApt, setNewApt]                         = useState({ firstName: '', lastName: '', phone: '', day: '', time: '' });

  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch = apt.patientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate   = selectedCalendarDate ? apt.day === selectedCalendarDate : true;
    return matchesSearch && matchesDate;
  });

  const handleSelectAppointment = (id: string) =>
    setSelectedAppointments((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  const handleMarkCompleted = () => {
    setAppointments((prev) => prev.map((apt) => selectedAppointments.includes(apt.id) ? { ...apt, status: 'completed' as const } : apt));
    setSelectedAppointments([]);
  };

  const handleMarkAbsent = () => {
    setAppointments((prev) => prev.map((apt) => selectedAppointments.includes(apt.id) ? { ...apt, status: 'absent' as const } : apt));
    setSelectedAppointments([]);
  };

  const handlePrescription = (appointment: Appointment) => {
    setSelectedForPrescription(appointment);
    setPrescriptionDialogOpen(true);
  };

  const handleAddAppointment = () => {
    if (!newApt.firstName || !newApt.lastName || !newApt.phone || !newApt.day || !newApt.time) return;
    const fullName = `${newApt.firstName} ${newApt.lastName}`;
    const initials = `${newApt.firstName[0]}${newApt.lastName[0]}`.toUpperCase();
    setAppointments((prev) => [...prev, {
      id: Date.now().toString(),
      patientName: fullName,
      specialty: 'Consultation',
      time: newApt.time,
      avatar: '',
      initials,
      status: 'waiting',
      day: parseInt(newApt.day),
      phone: newApt.phone,
    }]);
    setNewApt({ firstName: '', lastName: '', phone: '', day: '', time: '' });
    setAddDialogOpen(false);
  };

  const resetNewApt = () => {
    setNewApt({ firstName: '', lastName: '', phone: '', day: '', time: '' });
    setAddDialogOpen(false);
  };

  const isFormValid = newApt.firstName && newApt.lastName && newApt.phone && newApt.day && newApt.time;

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">Good morning, Dr. Mossaab</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-2">Here is your health dashboard. Stay on top of your appointments and care.</p>
      </div>

      {/* Stats Cards */}
      <StatsCards appointments={appointments} />

      {/* Calendar + Appointments grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

        <CalendarWidget
          appointments={appointments}
          className="lg:col-span-1"
          selectedDate={selectedCalendarDate}
          onDateSelect={setSelectedCalendarDate}
        />

        <div className="lg:col-span-2 flex flex-col">
          <Card className="bg-card border-border p-4 md:p-6 flex-1">

            {/* Title row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6">
              <h2 className="text-lg md:text-2xl font-bold text-foreground">
                {selectedCalendarDate
                  ? `Appointments – ${selectedCalendarDate} ${MONTHS[new Date().getMonth()]}`
                  : 'Manage Appointments'}
              </h2>
              <div className="flex items-center gap-2 shrink-0">
                {selectedCalendarDate && (
                  <button
                    onClick={() => setSelectedCalendarDate(null)}
                    className="text-xs text-muted-foreground hover:text-foreground underline transition-colors"
                  >
                    Show all
                  </button>
                )}
                <Button
                  onClick={() => setAddDialogOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  size="sm"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">New </span>Appointment
                </Button>
              </div>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by patient name..."
                className="pl-10 bg-background border-border text-sm md:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Bulk actions */}
            {selectedAppointments.length > 0 && (
              <div className="flex gap-2 mb-6">
                <Button onClick={handleMarkCompleted} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Mark Completed ({selectedAppointments.length})
                </Button>
                <Button onClick={handleMarkAbsent} variant="outline" className="gap-2 border-destructive text-destructive hover:bg-destructive/10">
                  <X className="w-4 h-4" />
                  Mark Absent ({selectedAppointments.length})
                </Button>
              </div>
            )}

            {/* List */}
            <div className="space-y-4">
              {filteredAppointments.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Calendar className="w-7 h-7 text-muted-foreground" />
                  </div>
                  <p className="font-semibold text-foreground mb-1">No appointments</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedCalendarDate
                      ? `There are no appointments scheduled for day ${selectedCalendarDate}.`
                      : 'No appointments found.'}
                  </p>
                </div>
              ) : (
                filteredAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    {/* Top row: checkbox + patient + status */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Checkbox
                        checked={selectedAppointments.includes(appointment.id)}
                        onCheckedChange={() => handleSelectAppointment(appointment.id)}
                      />
                      <button
                        onClick={() => setSelectedPatient(appointment)}
                        className="flex items-center gap-3 flex-1 min-w-0 text-left hover:opacity-80 transition-opacity"
                      >
                        <Avatar className="shrink-0">
                          <AvatarImage src={appointment.avatar} alt={appointment.patientName} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {appointment.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-foreground text-sm truncate">{appointment.patientName}</h3>
                          <p className="text-xs text-muted-foreground truncate">{appointment.specialty}</p>
                          {appointment.phone && (
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                              <Phone className="w-3 h-3 shrink-0" />
                              {appointment.phone}
                            </p>
                          )}
                        </div>
                      </button>

                      <div className="flex items-center gap-1.5 text-muted-foreground shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-xs">{appointment.time}</span>
                      </div>

                      <div className={`shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                        appointment.status === 'completed'
                          ? 'bg-primary/20 text-primary'
                          : appointment.status === 'absent'
                          ? 'bg-destructive/20 text-destructive'
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {appointment.status === 'completed' ? 'Done' : appointment.status === 'absent' ? 'Absent' : 'Waiting'}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 sm:shrink-0">
                      <Button size="sm" variant="outline" className="flex-1 sm:flex-none border-primary text-primary hover:bg-primary/10 gap-1.5 text-xs" onClick={() => handlePrescription(appointment)}>
                        <Send className="w-3.5 h-3.5" />
                        Prescription
                      </Button>
                      <Link href="/doctor/messages" className="flex-1 sm:flex-none">
                        <Button size="sm" variant="outline" className="w-full gap-1.5 text-xs">
                          <MessageSquare className="w-3.5 h-3.5" />
                          Message
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Feedback */}
      <Card className="bg-card border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Patient Feedback & Reviews</h2>
          <span className="text-sm text-muted-foreground">{ALL_FEEDBACKS.length} review{ALL_FEEDBACKS.length !== 1 ? 's' : ''}</span>
        </div>

        {ALL_FEEDBACKS.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
              <span className="text-2xl">💬</span>
            </div>
            <p className="font-semibold text-foreground mb-1">No feedback for now</p>
            <p className="text-sm text-muted-foreground">Patient reviews will appear here once received.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(showAllFeedback ? ALL_FEEDBACKS : ALL_FEEDBACKS.slice(0, 4)).map((r) => (
                <div key={r.name} className="p-4 rounded-lg bg-background border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-foreground">{r.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`text-base ${i < r.stars ? 'text-primary' : 'text-muted'}`}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">"{r.text}"</p>
                  <p className="text-xs text-muted-foreground mt-3">{r.date}</p>
                </div>
              ))}
            </div>

            {ALL_FEEDBACKS.length > 4 && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowAllFeedback((v) => !v)}
                  className="text-sm text-primary hover:underline font-medium transition-colors"
                >
                  {showAllFeedback
                    ? 'Show less'
                    : `Show ${ALL_FEEDBACKS.length - 4} more review${ALL_FEEDBACKS.length - 4 !== 1 ? 's' : ''}`}
                </button>
              </div>
            )}
          </>
        )}
      </Card>

      {/* ─── Add Appointment Dialog ─── */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Plus className="w-4 h-4 text-primary" />
              </div>
              New Appointment
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">First Name</label>
                <Input
                  placeholder="e.g. Ahmed"
                  value={newApt.firstName}
                  onChange={(e) => setNewApt((p) => ({ ...p, firstName: e.target.value }))}
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Last Name</label>
                <Input
                  placeholder="e.g. Benali"
                  value={newApt.lastName}
                  onChange={(e) => setNewApt((p) => ({ ...p, lastName: e.target.value }))}
                  className="bg-background border-border"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="+212 6XX XXX XXX"
                  value={newApt.phone}
                  onChange={(e) => setNewApt((p) => ({ ...p, phone: e.target.value }))}
                  className="bg-background border-border pl-9"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Day of month</label>
                <Input
                  type="number"
                  min={1}
                  max={31}
                  placeholder="e.g. 15"
                  value={newApt.day}
                  onChange={(e) => setNewApt((p) => ({ ...p, day: e.target.value }))}
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Time</label>
                <Input
                  type="time"
                  onChange={(e) => {
                    const [h, m] = e.target.value.split(':');
                    const hour = parseInt(h);
                    const ampm = hour >= 12 ? 'PM' : 'AM';
                    const h12 = hour % 12 === 0 ? 12 : hour % 12;
                    setNewApt((p) => ({ ...p, time: `${String(h12).padStart(2, '0')}:${m} ${ampm}` }));
                  }}
                  className="bg-background border-border"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1 border-border" onClick={resetNewApt}>
                Cancel
              </Button>
              <Button
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleAddAppointment}
                disabled={!isFormValid}
              >
                Save Appointment
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Patient Profile Modal */}
      {selectedPatient && (
        <PatientProfileModal
          patient={selectedPatient}
          isOpen={!!selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}

      {/* Prescription Modal */}
      {selectedForPrescription && (
        <PrescriptionModal
          patient={selectedForPrescription}
          isOpen={prescriptionDialogOpen}
          onClose={() => {
            setPrescriptionDialogOpen(false);
            setSelectedForPrescription(null);
          }}
        />
      )}
    </div>
  );
}
