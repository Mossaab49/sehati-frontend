'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { unreadStore } from '@/lib/unread-store';
import {
  Calendar, MessageSquare, Star, Trash2, X,
  CheckCircle2, XCircle, Clock, User, Phone, Stethoscope
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// ─── Types ───────────────────────────────────────────────────────

type NotifType = 'new_appointment' | 'patient_feedback' | 'new_conversation';

interface AppointmentData {
  patientName:  string;
  patientPhone: string;
  specialty:    string;
  date:         string;
  time:         string;
}

interface FeedbackData {
  patientName: string;
  rating:      number;
  comment:     string;
}

interface ConversationData {
  patientName: string;
  preview:     string;
  convId:      string;
}

interface Notification {
  id:        string;
  type:      NotifType;
  title:     string;
  message:   string;
  timestamp: string;
  read:      boolean;
  data:      AppointmentData | FeedbackData | ConversationData;
}

// ─── Mock Data ───────────────────────────────────────────────────

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'new_appointment',
    title: 'New Appointment Request',
    message: 'Sarah Johnson has requested an appointment with you.',
    timestamp: '10 minutes ago',
    read: false,
    data: {
      patientName:  'Sarah Johnson',
      patientPhone: '+212 6 12 34 56 78',
      specialty:    'General Checkup',
      date:         'March 12, 2026',
      time:         '14:00',
    } as AppointmentData,
  },
  {
    id: '2',
    type: 'new_conversation',
    title: 'New Message from Patient',
    message: 'Michael Chen started a new conversation with you.',
    timestamp: '32 minutes ago',
    read: false,
    data: {
      patientName: 'Michael Chen',
      preview:     'Hello Doctor, I have some questions about my test results...',
      convId:      '2',
    } as ConversationData,
  },
  {
    id: '3',
    type: 'patient_feedback',
    title: 'New Patient Review',
    message: 'Emma Davis left a review after her consultation.',
    timestamp: '2 hours ago',
    read: false,
    data: {
      patientName: 'Emma Davis',
      rating:      5,
      comment:     'Excellent consultation. Dr. Mossaab was very thorough and professional. I felt heard and well taken care of throughout.',
    } as FeedbackData,
  },
  {
    id: '4',
    type: 'new_appointment',
    title: 'New Appointment Request',
    message: 'Omar Benali has requested an appointment with you.',
    timestamp: 'Yesterday',
    read: true,
    data: {
      patientName:  'Omar Benali',
      patientPhone: '+212 6 98 76 54 32',
      specialty:    'Dermatology',
      date:         'March 14, 2026',
      time:         '10:30',
    } as AppointmentData,
  },
  {
    id: '5',
    type: 'patient_feedback',
    title: 'New Patient Review',
    message: 'Layla Hassan left a review after her consultation.',
    timestamp: '2 days ago',
    read: true,
    data: {
      patientName: 'Layla Hassan',
      rating:      4,
      comment:     'Very professional and kind doctor. Would definitely recommend.',
    } as FeedbackData,
  },
];

// ─── Star Rating ─────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={cn('w-3.5 h-3.5', i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground')} />
      ))}
    </div>
  );
}

// ─── Appointment Modal ────────────────────────────────────────────

function AppointmentModal({
  data, onAccept, onReject, onClose,
}: {
  data: AppointmentData;
  onAccept: () => void;
  onReject: () => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <Card className="bg-card border-border w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Appointment Request</h3>
                <p className="text-xs text-muted-foreground">Review and respond</p>
              </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="font-semibold text-foreground">{data.patientName}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-foreground">{data.patientPhone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Stethoscope className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-foreground">{data.specialty}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-foreground">{data.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-foreground">{data.time}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={onReject} variant="outline" className="flex-1 border-destructive text-destructive hover:bg-destructive/10 gap-2">
              <XCircle className="w-4 h-4" /> Reject
            </Button>
            <Button onClick={onAccept} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <CheckCircle2 className="w-4 h-4" /> Accept
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

// ─── Feedback Modal ───────────────────────────────────────────────

function FeedbackModal({ data, onClose }: { data: FeedbackData; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <Card className="bg-card border-border w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Patient Review</h3>
                <p className="text-xs text-muted-foreground">from {data.patientName}</p>
              </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground">{data.patientName}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={cn('w-4 h-4', i < data.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground')} />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{data.comment}"</p>
          </div>

          <Button onClick={onClose} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Close
          </Button>
        </div>
      </Card>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────

export default function NotificationsPage() {
  const router = useRouter();

  useEffect(() => { unreadStore.setNotifications(0); }, []);

  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [activeCard, setActiveCard]       = useState<Notification | null>(null);
  const [filter, setFilter]               = useState<'all' | 'unread' | NotifType>('all');

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filtered = notifications.filter((n) => {
    if (filter === 'all')    return true;
    if (filter === 'unread') return !n.read;
    return n.type === filter;
  });

  const markRead = (id: string) =>
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));

  const handleDelete = (id: string) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  const handleMarkAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const handleClick = (notif: Notification) => {
    markRead(notif.id);
    if (notif.type === 'new_conversation') {
      // redirect directly to messages page
      router.push('/doctor/messages');
    } else {
      setActiveCard(notif);
    }
  };

  const typeConfig: Record<NotifType, { icon: React.ReactNode; color: string; bg: string; label: string }> = {
    new_appointment:  { icon: <Calendar className="w-5 h-5" />,      color: 'text-blue-400',   bg: 'bg-blue-400/10',   label: 'Appointment' },
    new_conversation: { icon: <MessageSquare className="w-5 h-5" />, color: 'text-purple-400', bg: 'bg-purple-400/10', label: 'Message'     },
    patient_feedback: { icon: <Star className="w-5 h-5" />,          color: 'text-yellow-400', bg: 'bg-yellow-400/10', label: 'Review'      },
  };

  return (
    <>
      <div className="p-4 sm:p-6 md:p-8 space-y-6 max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Notifications</h1>
            <p className="text-sm md:text-base text-muted-foreground mt-1">
              {unreadCount > 0
                ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
                : "You're all caught up!"}
            </p>
          </div>
          {unreadCount > 0 && (
            <Button onClick={handleMarkAllRead} variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Mark all as read
            </Button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap">
          {([
            { key: 'all',              label: 'All' },
            { key: 'unread',           label: `Unread (${unreadCount})` },
            { key: 'new_appointment',  label: 'Appointments' },
            { key: 'new_conversation', label: 'Messages' },
            { key: 'patient_feedback', label: 'Reviews' },
          ] as const).map((f) => (
            <Button
              key={f.key}
              onClick={() => setFilter(f.key)}
              variant={filter === f.key ? 'default' : 'outline'}
              size="sm"
              className={cn(filter === f.key && 'bg-primary text-primary-foreground')}
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <Card className="bg-card border-border p-12 text-center">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No notifications</h3>
              <p className="text-muted-foreground">Check back later for new updates.</p>
            </Card>
          ) : (
            filtered.map((notif) => {
              const cfg = typeConfig[notif.type];
              return (
                <Card
                  key={notif.id}
                  onClick={() => handleClick(notif)}
                  className={cn(
                    'border transition-all cursor-pointer hover:shadow-md select-none',
                    notif.read
                      ? 'bg-card border-border hover:border-primary/40'
                      : 'bg-primary/5 border-primary/40'
                  )}
                >
                  <div className="p-4 flex items-start gap-4">
                    <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center shrink-0', cfg.bg)}>
                      <div className={cfg.color}>{cfg.icon}</div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="font-semibold text-foreground text-sm">{notif.title}</h3>
                            {!notif.read && <span className="w-2 h-2 bg-primary rounded-full shrink-0" />}
                            <Badge variant="outline" className={cn('text-[10px] shrink-0 border-current', cfg.color)}>
                              {cfg.label}
                            </Badge>
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed">{notif.message}</p>

                          {/* Type-specific previews */}
                          {notif.type === 'patient_feedback' && (
                            <StarRating rating={(notif.data as FeedbackData).rating} />
                          )}
                          {notif.type === 'new_appointment' && (
                            <p className="text-xs text-blue-400 mt-1.5 font-medium flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {(notif.data as AppointmentData).date} — {(notif.data as AppointmentData).time}
                            </p>
                          )}
                          {notif.type === 'new_conversation' && (
                            <p className="text-xs text-purple-400 mt-1.5 font-medium">→ Click to open conversation</p>
                          )}

                          <p className="text-xs text-muted-foreground mt-2">{notif.timestamp}</p>
                        </div>

                        <button
                          onClick={(e) => { e.stopPropagation(); handleDelete(notif.id); }}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </div>

      {/* ── Modals ── */}
      {activeCard?.type === 'new_appointment' && (
        <AppointmentModal
          data={activeCard.data as AppointmentData}
          onAccept={() => setActiveCard(null)}
          onReject={() => setActiveCard(null)}
          onClose={() => setActiveCard(null)}
        />
      )}
      {activeCard?.type === 'patient_feedback' && (
        <FeedbackModal
          data={activeCard.data as FeedbackData}
          onClose={() => setActiveCard(null)}
        />
      )}
    </>
  );
}
