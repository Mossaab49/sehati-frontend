'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutGrid, MessageSquare, Bell, Settings, User,
  LogOut, ChevronLeft, Heart, ShieldAlert,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { logout } from '@/lib/auth';
import { useLang } from '@/hooks/use-lang';
import { unreadStore } from '@/lib/unread-store';

/* ─── Confirm Dialog ─────────────────────────────────────────── */
function LogoutDialog({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  const { t } = useLang();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-sm mx-4 shadow-2xl space-y-4">
        <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
          <ShieldAlert className="w-6 h-6 text-destructive" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-foreground">{t('confirm_logout_title')}</h3>
          <p className="text-sm text-muted-foreground mt-1">{t('logout_confirm_msg')}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors text-sm font-medium"
          >
            {t('cancel')}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-lg bg-destructive hover:bg-destructive/90 text-white transition-colors text-sm font-medium"
          >
            {t('logout')}
          </button>
        </div>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [collapsed, setCollapsed]       = useState(false);
  const [showLogout, setShowLogout]     = useState(false);
  const pathname = usePathname();
  const router   = useRouter();
  const { t, lang }  = useLang();

  const [unread, setUnread] = useState(unreadStore.get());

  useEffect(() => {
    const unsub = unreadStore.subscribe(setUnread);
    return unsub;
  }, []);

  const menuItems = [
    { icon: LayoutGrid,   label: t('dashboard'),     href: '/doctor/dashboard',     badge: null            },
    { icon: User,         label: t('profile'),        href: '/doctor/profile',       badge: null            },
    { icon: MessageSquare,label: t('messages'),       href: '/doctor/messages',      badge: unread.messages || null },
    { icon: Bell,         label: t('notifications'),  href: '/doctor/notifications', badge: unread.notifications || null },
    { icon: Settings,     label: t('settings'),       href: '/doctor/settings',      badge: null            },
  ];

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <>
      <div className={cn(
        'flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300',
        collapsed ? 'w-20' : 'w-52'
      )}>
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {!collapsed ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-sidebar-foreground">Sehati</span>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mx-auto">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link href={item.href}>
                    <button className={cn(
                      'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 relative group',
                      active
                        ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-md'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                    )}>
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && (
                        <>
                          <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                          {item.badge && (
                            <span className="bg-primary text-primary-foreground text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                      {collapsed && item.badge && (
                        <span className="absolute -right-1 -top-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Collapse button */}
        <div className="p-3 border-t border-sidebar-border">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center p-2 rounded-lg text-sidebar-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            title={collapsed ? 'Expand' : 'Collapse'}
          >
            <ChevronLeft className={cn('w-5 h-5 transition-transform duration-200', collapsed && 'rotate-180')} />
          </button>
        </div>

        {/* Logout */}
        <div className="p-3 border-t border-sidebar-border">
          <button
            onClick={() => setShowLogout(true)}
            className={cn(
              'w-full flex items-center gap-2 px-3 py-2.5 rounded-lg border border-sidebar-border text-sidebar-foreground hover:border-destructive hover:bg-destructive/10 hover:text-destructive transition-all duration-200',
              collapsed ? 'justify-center' : ''
            )}
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span className="text-sm font-medium">{t('logout')}</span>}
          </button>
        </div>
      </div>

      {showLogout && (
        <LogoutDialog
          onConfirm={handleLogout}
          onCancel={() => setShowLogout(false)}
        />
      )}
    </>
  );
}
