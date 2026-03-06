import { Calendar, Clock, CheckCircle2, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StatsCardsProps {
  appointments: Array<{
    id: string;
    status: 'waiting' | 'completed' | 'absent';
  }>;
}

export function StatsCards({ appointments }: StatsCardsProps) {
  const today = new Date().toDateString();
  const todayAppointments = appointments.filter(() => true); // In real app, filter by date

  const stats = [
    {
      label: 'Today\'s Appointments',
      value: todayAppointments.length,
      icon: Calendar,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      label: 'Pending',
      value: todayAppointments.filter((a) => a.status === 'waiting').length,
      icon: Clock,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
    },
    {
      label: 'Completed',
      value: todayAppointments.filter((a) => a.status === 'completed').length,
      icon: CheckCircle2,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      label: 'Absent',
      value: todayAppointments.filter((a) => a.status === 'absent').length,
      icon: X,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="bg-card border-border p-4 md:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className={`p-2 md:p-3 rounded-lg ${stat.bgColor}`}>
                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
