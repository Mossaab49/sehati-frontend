'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Appointment {
  id: string;
  time: string;
  patientName: string;
  specialty?: string;
  status: 'waiting' | 'completed' | 'absent';
  day: number;
}

interface CalendarWidgetProps {
  appointments: Appointment[];
  className?: string;
  selectedDate?: number | null;
  onDateSelect?: (day: number) => void;
}

export function CalendarWidget({
  appointments,
  className,
  selectedDate = null,
  onDateSelect,
}: CalendarWidgetProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Build a map: day -> list of appointments
  const appointmentsByDay = appointments.reduce<Record<number, Appointment[]>>((acc, apt) => {
    if (apt.day) {
      acc[apt.day] = acc[apt.day] ? [...acc[apt.day], apt] : [apt];
    }
    return acc;
  }, {});

  const getDaysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const getFirstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const today = new Date();
  const isToday = (day: number | null) =>
    !!day &&
    day === today.getDate() &&
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

  const previousMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const nextMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  const selectedDayAppointments = selectedDate ? (appointmentsByDay[selectedDate] ?? []) : [];

  const statusColor = (status: Appointment['status']) => {
    if (status === 'completed') return 'bg-primary/20 text-primary';
    if (status === 'absent') return 'bg-destructive/20 text-destructive';
    return 'bg-yellow-500/20 text-yellow-600';
  };

  if (!mounted) return null;

  return (
    <Card className={cn('bg-card border-border p-6', className)}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={previousMonth} className="border-border">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextMonth} className="border-border">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <div key={d} className="text-center text-xs font-semibold text-muted-foreground py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const hasApts = day !== null && !!appointmentsByDay[day];
            const isSelected = day !== null && selectedDate === day;
            const isTodayDay = isToday(day);

            return (
              <div key={index} className="aspect-square">
                {day ? (
                  <button
                    onClick={() => onDateSelect?.(day)}
                    className={cn(
                      'w-full h-full rounded-lg text-sm font-medium transition-all relative flex items-center justify-center',
                      isSelected
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : hasApts
                        ? 'bg-primary/15 text-primary hover:bg-primary/25 border border-primary/40'
                        : isTodayDay
                        ? 'border-2 border-primary/60 text-foreground hover:bg-accent'
                        : 'text-foreground hover:bg-accent'
                    )}
                  >
                    <span>{day}</span>
                    {isTodayDay && !isSelected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                    )}
                  </button>
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Appointment list for selected day */}
        <div className="mt-4 pt-4 border-t border-border">
          {selectedDate === null ? (
            <p className="text-xs text-muted-foreground text-center">
              {appointments.length} appointment{appointments.length !== 1 ? 's' : ''} this month — click a day to view
            </p>
          ) : selectedDayAppointments.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-sm font-medium text-foreground">No appointments</p>
              <p className="text-xs text-muted-foreground mt-1">
                Nothing scheduled for day {selectedDate}.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                {selectedDayAppointments.length} appointment{selectedDayAppointments.length !== 1 ? 's' : ''} — day {selectedDate}
              </p>
              {selectedDayAppointments.map((apt) => (
                <div
                  key={apt.id}
                  className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-background border border-border"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{apt.patientName}</p>
                    {apt.specialty && (
                      <p className="text-xs text-muted-foreground truncate">{apt.specialty}</p>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{apt.time}</span>
                  <span className={cn('text-xs font-semibold px-2 py-0.5 rounded-full shrink-0', statusColor(apt.status))}>
                    {apt.status === 'completed' ? 'Done' : apt.status === 'absent' ? 'Absent' : 'Waiting'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
