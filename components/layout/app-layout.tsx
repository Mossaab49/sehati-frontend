'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LayoutGrid, User, MessageSquare, Bell, Settings } from 'lucide-react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { getUser } from '@/lib/auth';
import { unreadStore } from '@/lib/unread-store';
import { cn } from '@/lib/utils';

const AUTH_ROUTES    = ['/login', '/signup'];
const PATIENT_ROUTES = ['/patient'];

/* ─── Doctor Mobile Bottom Nav ────────────────────────────── */
function DoctorMobileNav() {
  const pathname = usePathname();
  const [unread, setUnread] = useState(() => unreadStore.get());
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => unreadStore.subscribe((s) => setUnread({ ...s })), []);

  const items = [
    { icon: LayoutGrid,    label: 'Dashboard',    href: '/doctor/dashboard',     badge: 0 },
    { icon: User,          label: 'Profile',       href: '/doctor/profile',       badge: 0 },
    { icon: MessageSquare, label: 'Messages',      href: '/doctor/messages',      badge: unread.messages },
    { icon: Bell,          label: 'Notifs',        href: '/doctor/notifications', badge: unread.notifications },
    { icon: Settings,      label: 'Settings',      href: '/doctor/settings',      badge: 0 },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border">
      <div className="flex items-stretch justify-around px-1 py-1" style={{ paddingBottom: 'env(safe-area-inset-bottom, 4px)' }}>
        {items.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href);
          const Icon = item.icon;
          const badge = mounted ? item.badge : 0;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative flex flex-col items-center justify-center gap-1 flex-1 py-2 px-1 rounded-xl transition-all',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {isActive && (
                <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-primary" />
              )}
              <div className="relative mt-1">
                <Icon className={cn('w-5 h-5 transition-transform', isActive && 'scale-110')} />
                {badge > 0 && (
                  <span className="absolute -top-1 -right-1.5 min-w-[14px] h-3.5 px-0.5 text-[8px] font-bold rounded-full bg-destructive text-destructive-foreground flex items-center justify-center">
                    {badge > 9 ? '9+' : badge}
                  </span>
                )}
              </div>
              <span className={cn('text-[9px] font-semibold tracking-wide transition-all', isActive ? 'opacity-100' : 'opacity-60')}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

/* ─── App Layout ────────────────────────────────────────────── */
export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router   = useRouter();
  const [checked, setChecked] = useState(false);

  const isAuthPage    = AUTH_ROUTES.some((r) => pathname?.startsWith(r));
  const isPatientPage = PATIENT_ROUTES.some((r) => pathname?.startsWith(r));

  useEffect(() => {
    if (!isAuthPage) {
      const user = getUser();
      if (!user) { router.replace('/login'); return; }
      if (user.role === 'patient' && !isPatientPage) { router.replace('/patient'); return; }
      if (user.role === 'doctor' && isPatientPage) { router.replace('/doctor/dashboard'); return; }
    }
    setChecked(true);
  }, [pathname]);

  if (!checked && !isAuthPage) return null;
  if (isAuthPage)    return <>{children}</>;
  if (isPatientPage) return <>{children}</>;

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-col h-full">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto bg-background pb-16 md:pb-0">
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <DoctorMobileNav />
    </div>
  );
}
