'use client';

import { useState, useEffect } from 'react';
import { unreadStore } from '@/lib/unread-store';
import { Calendar, MessageSquare, AlertCircle, FileText, Pill, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Notification {
  id: string;
  type: 'appointment' | 'message' | 'alert' | 'report' | 'medication';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  icon: React.ReactNode;
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'appointment',
    title: 'New Patient Appointment',
    message: 'Sarah Johnson has scheduled an appointment with you for today at 14:00.',
    timestamp: '10 minutes ago',
    read: false,
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    id: '2',
    type: 'message',
    title: 'Patient Message',
    message: 'Michael Chen sent you a message asking about his test results.',
    timestamp: '32 minutes ago',
    read: false,
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    id: '3',
    type: 'report',
    title: 'Test Results Ready',
    message: 'Lab results for Emma Davis are now available for review.',
    timestamp: '2 hours ago',
    read: false,
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: '4',
    type: 'medication',
    title: 'Patient Feedback',
    message: 'Sarah Johnson left a 5-star review about your consultation.',
    timestamp: '3 hours ago',
    read: true,
    icon: <Pill className="w-5 h-5" />,
  },
  {
    id: '5',
    type: 'appointment',
    title: 'Appointment Cancellation',
    message: 'James Wilson has cancelled his appointment scheduled for March 3 at 10:00.',
    timestamp: 'Yesterday',
    read: true,
    icon: <Calendar className="w-5 h-5" />,
  },
];

type FilterType = 'all' | 'unread' | 'appointment' | 'message' | 'alert';

export default function NotificationsPage() {
  useEffect(() => {
    unreadStore.setNotifications(0);
  }, []);

  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notif.read;
    if (filter === 'appointment') return notif.type === 'appointment';
    if (filter === 'message') return notif.type === 'message';
    if (filter === 'alert') return notif.type === 'alert';
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'appointment':
        return 'text-blue-400';
      case 'message':
        return 'text-purple-400';
      case 'alert':
        return 'text-yellow-400';
      case 'report':
        return 'text-green-400';
      case 'medication':
        return 'text-cyan-400';
      default:
        return 'text-muted-foreground';
    }
  };

  const getTypeBgColor = (type: string) => {
    switch (type) {
      case 'appointment':
        return 'bg-blue-400/10';
      case 'message':
        return 'bg-purple-400/10';
      case 'alert':
        return 'bg-yellow-400/10';
      case 'report':
        return 'bg-green-400/10';
      case 'medication':
        return 'bg-cyan-400/10';
      default:
        return 'bg-muted/10';
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Notifications</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-2">You have {unreadCount} unread alerts from your patients</p>
        </div>
        {unreadCount > 0 && (
          <Button
            onClick={handleMarkAllAsRead}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Mark all as read
          </Button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {(['all', 'unread', 'appointment', 'message', 'alert'] as const).map((f) => (
          <Button
            key={f}
            onClick={() => setFilter(f)}
            variant={filter === f ? 'default' : 'outline'}
            className={cn(
              'capitalize',
              filter === f && 'bg-primary text-primary-foreground'
            )}
          >
            {f === 'all' ? 'All' : f === 'unread' ? `Unread (${unreadCount})` : f}
          </Button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <Card
              key={notification.id}
              className={cn(
                'bg-card border transition-colors cursor-pointer',
                notification.read
                  ? 'border-border hover:border-primary/50'
                  : 'border-primary/50 bg-primary/5'
              )}
            >
              <div className="p-4 flex items-start gap-4">
                {/* Icon */}
                <div
                  className={cn(
                    'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center',
                    getTypeBgColor(notification.type)
                  )}
                >
                  <div className={getTypeColor(notification.type)}>
                    {notification.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{notification.title}</h3>
                        {!notification.read && (
                          <span className="w-2 h-2 bg-primary rounded-full" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">{notification.timestamp}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {!notification.read && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleMarkAsRead(notification.id)}
                          className="text-primary hover:bg-primary/10"
                        >
                          Read
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(notification.id)}
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <Card className="bg-card border-border p-12 text-center">
            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No notifications</h3>
            <p className="text-muted-foreground">You're all caught up! Check back later for new notifications.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
