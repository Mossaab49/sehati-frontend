'use client';

import { Moon, Sun, LogOut, ShieldAlert, Menu, X, LayoutGrid, User, MessageSquare, Bell, Settings } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { logout } from '@/lib/auth';
import { unreadStore } from '@/lib/unread-store';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from 'next-themes';

function LogoutConfirmDialog({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-sm shadow-2xl space-y-4">
        <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
          <ShieldAlert className="w-6 h-6 text-destructive" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-foreground">Log out?</h3>
          <p className="text-sm text-muted-foreground mt-1">You will be signed out of your account.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 py-3 rounded-xl border border-border text-foreground hover:bg-muted transition-colors text-sm font-medium" onClick={onCancel}>
            Cancel
          </button>
          <button className="flex-1 py-3 rounded-xl bg-destructive hover:bg-destructive/90 text-white transition-colors text-sm font-medium" onClick={onConfirm}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { theme, setTheme } = useTheme();
  const router   = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted]           = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [unread, setUnread]             = useState(() => unreadStore.get());
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => unreadStore.subscribe((s) => setUnread({ ...s })), []);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const navItems = [
    { icon: LayoutGrid,    label: 'Dashboard',     href: '/doctor/dashboard',     badge: 0 },
    { icon: User,          label: 'Profile',        href: '/doctor/profile',       badge: 0 },
    { icon: MessageSquare, label: 'Messages',       href: '/doctor/messages',      badge: unread.messages },
    { icon: Bell,          label: 'Notifications',  href: '/doctor/notifications', badge: unread.notifications },
    { icon: Settings,      label: 'Settings',       href: '/doctor/settings',      badge: 0 },
  ];

  const totalUnread = (unread.messages || 0) + (unread.notifications || 0);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between px-4">

          {/* Logo (mobile only — desktop has it in sidebar) */}
          <Link href="/doctor/dashboard" className="md:hidden flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">S</span>
            </div>
            <span className="font-bold text-foreground">Sehati</span>
          </Link>

          {/* Desktop spacer */}
          <div className="hidden md:flex flex-1" />

          {/* Right actions */}
          <div className="flex items-center gap-1">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              suppressHydrationWarning
            >
              {mounted ? (
                theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
              ) : <Sun className="w-5 h-5" />}
            </button>

            {/* Notifications (desktop only — mobile uses bottom nav) */}
            <Link href="/doctor/notifications" className="hidden md:inline-flex relative items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <Bell className="w-5 h-5" />
              {mounted && unread.notifications > 0 && (
                <span className="absolute top-1 right-1 min-w-[14px] h-3.5 px-0.5 bg-primary text-primary-foreground text-[9px] font-bold rounded-full flex items-center justify-center">
                  {unread.notifications}
                </span>
              )}
            </Link>

            {/* Settings (desktop only) */}
            <Link href="/doctor/settings" className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <Settings className="w-5 h-5" />
            </Link>

            {/* Avatar dropdown */}
            <div ref={menuRef} className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 pl-1 pr-2 py-1.5 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-xs font-bold text-primary-foreground">
                  DM
                </div>
                <span className="hidden md:inline text-sm font-medium text-foreground">Dr. Mossaab</span>
                {/* Mobile: show badge if unread */}
                {mounted && totalUnread > 0 && (
                  <span className="md:hidden flex items-center justify-center w-4 h-4 text-[9px] font-bold rounded-full bg-destructive text-destructive-foreground">
                    {totalUnread > 9 ? '9+' : totalUnread}
                  </span>
                )}
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-card rounded-2xl border border-border shadow-xl overflow-hidden z-50">
                  {/* User info */}
                  <div className="px-4 py-3 border-b border-border bg-secondary/40">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0">DM</div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">Dr. Mossaab</p>
                        <p className="text-xs text-muted-foreground">General Practitioner</p>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="py-1">
                    <Link href="/doctor/profile" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors">
                      <User className="w-4 h-4 text-muted-foreground" />
                      View Profile
                    </Link>
                    <Link href="/doctor/settings" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors">
                      <Settings className="w-4 h-4 text-muted-foreground" />
                      Settings
                    </Link>
                  </div>

                  <div className="border-t border-border py-1">
                    <button
                      onClick={() => { setMenuOpen(false); setShowLogoutConfirm(true); }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-destructive hover:bg-destructive/8 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {showLogoutConfirm && (
        <LogoutConfirmDialog
          onConfirm={() => { setShowLogoutConfirm(false); logout(); router.push('/login'); }}
          onCancel={() => setShowLogoutConfirm(false)}
        />
      )}
    </>
  );
}
