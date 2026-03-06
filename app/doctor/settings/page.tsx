'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '@/lib/auth';
import { langStore, type Lang } from '@/lib/lang-store';
import { useLang } from '@/hooks/use-lang';
import {
  Lock, Trash2, LogOut, Moon, Sun, Monitor,
  Eye, EyeOff, CheckCircle2, AlertCircle, ShieldAlert, Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const CURRENT_PASSWORD = 'password123';

/* ─── Confirm Dialog ─────────────────────────────────────────── */
function ConfirmDialog({
  title, message, confirmLabel, onConfirm, onCancel, danger = true,
}: {
  title: string; message: string; confirmLabel: string;
  onConfirm: () => void; onCancel: () => void; danger?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-sm mx-4 shadow-2xl space-y-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto ${danger ? 'bg-destructive/10' : 'bg-primary/10'}`}>
          <ShieldAlert className={`w-6 h-6 ${danger ? 'text-destructive' : 'text-primary'}`} />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{message}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 border-border" onClick={onCancel}>{onCancel && 'Cancel'}</Button>
          <Button className={`flex-1 ${danger ? 'bg-destructive hover:bg-destructive/90 text-white' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t }  = useLang();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [showPwd, setShowPwd]     = useState({ current: false, new: false, confirm: false });
  const [pwdError, setPwdError]   = useState('');
  const [pwdSuccess, setPwdSuccess] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const themes = [
    { value: 'light', labelKey: 'light' as const, icon: Sun },
    { value: 'dark',  labelKey: 'dark'  as const, icon: Moon },
    { value: 'system',labelKey: 'system'as const, icon: Monitor },
  ];

  const languages: { value: Lang; label: string; flag: string }[] = [
    { value: 'en', label: 'English',  flag: '🇬🇧' },
    { value: 'fr', label: 'Français', flag: '🇫🇷' },
    { value: 'ar', label: 'العربية',  flag: '🇲🇦' },
  ];

  const handleUpdatePassword = () => {
    setPwdError(''); setPwdSuccess(false);
    if (passwords.current !== CURRENT_PASSWORD) { setPwdError(t('pwd_err_wrong')); return; }
    if (passwords.new.length < 8)               { setPwdError(t('pwd_err_short')); return; }
    if (passwords.new === passwords.current)    { setPwdError(t('pwd_err_same'));  return; }
    if (passwords.new !== passwords.confirm)    { setPwdError(t('pwd_err_match')); return; }
    setPwdSuccess(true);
    setPasswords({ current: '', new: '', confirm: '' });
  };

  const handlePwdChange = (field: keyof typeof passwords, value: string) => {
    setPasswords((p) => ({ ...p, [field]: value }));
    setPwdError(''); setPwdSuccess(false);
  };

  const pwdStrength = passwords.new.length === 0 ? 0 : passwords.new.length < 6 ? 1 : passwords.new.length < 10 ? 2 : passwords.new.length < 14 ? 3 : 4;
  const pwdColors   = ['', 'bg-destructive', 'bg-orange-500', 'bg-yellow-500', 'bg-primary'];
  const pwdStrLabels: Array<'weak'|'fair'|'good'|'strong'> = ['weak','weak','fair','good','strong'];

  if (!mounted) return null;

  return (
    <div className={cn("p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 max-w-3xl mx-auto", lang === 'ar' && 'text-right')}>

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{t('settings_title')}</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-2">{t('settings_sub')}</p>
      </div>

      {/* Appearance */}
      <Card className="bg-card border-border p-8">
        <div className="flex items-center gap-3 mb-6">
          <Sun className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">{t('appearance')}</h2>
        </div>
        <div className="space-y-6">
          {/* Theme */}
          <div>
            <Label className="text-base font-semibold text-foreground mb-1 block">{t('theme')}</Label>
            <p className="text-sm text-muted-foreground mb-4">{t('theme_sub')}</p>
            <div className="grid grid-cols-3 gap-4">
              {themes.map((th) => {
                const Icon = th.icon;
                return (
                  <button
                    key={th.value}
                    onClick={() => setTheme(th.value)}
                    className={cn(
                      'flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all',
                      theme === th.value ? 'border-primary bg-primary/10' : 'border-border bg-background hover:border-primary/50'
                    )}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-sm font-medium">{t(th.labelKey)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Language */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <Label className="text-base font-semibold text-foreground">{t('language')}</Label>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{t('language_sub')}</p>
            <div className="grid grid-cols-3 gap-3">
              {languages.map((l) => (
                <button
                  key={l.value}
                  onClick={() => setLang(l.value)}
                  className={cn(
                    'flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all',
                    lang === l.value
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-background text-foreground hover:border-primary/50'
                  )}
                >
                  <span className="text-lg">{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card className="bg-card border-border p-8">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">{t('security')}</h2>
        </div>
        <div className="space-y-4">
          {/* Current */}
          <div>
            <Label className="text-sm font-medium text-foreground mb-2 block">{t('current_pwd')}</Label>
            <div className="relative">
              <Input
                type={showPwd.current ? 'text' : 'password'}
                placeholder={t('pwd_placeholder_current')}
                value={passwords.current}
                onChange={(e) => handlePwdChange('current', e.target.value)}
                className="bg-background border-border pr-10"
              />
              <button type="button" onClick={() => setShowPwd((p) => ({ ...p, current: !p.current }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPwd.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          {/* New */}
          <div>
            <Label className="text-sm font-medium text-foreground mb-2 block">{t('new_pwd')}</Label>
            <div className="relative">
              <Input
                type={showPwd.new ? 'text' : 'password'}
                placeholder={t('pwd_placeholder_new')}
                value={passwords.new}
                onChange={(e) => handlePwdChange('new', e.target.value)}
                className="bg-background border-border pr-10"
              />
              <button type="button" onClick={() => setShowPwd((p) => ({ ...p, new: !p.new }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPwd.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {passwords.new.length > 0 && (
              <div className="mt-2 flex items-center gap-2">
                <div className="flex gap-1 flex-1">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= pwdStrength ? pwdColors[pwdStrength] : 'bg-border'}`} />
                  ))}
                </div>
                <span className={`text-xs font-medium ${pwdStrength >= 3 ? 'text-primary' : 'text-orange-500'}`}>
                  {t(pwdStrLabels[pwdStrength])}
                </span>
              </div>
            )}
          </div>
          {/* Confirm */}
          <div>
            <Label className="text-sm font-medium text-foreground mb-2 block">{t('confirm_pwd')}</Label>
            <div className="relative">
              <Input
                type={showPwd.confirm ? 'text' : 'password'}
                placeholder={t('pwd_placeholder_confirm')}
                value={passwords.confirm}
                onChange={(e) => handlePwdChange('confirm', e.target.value)}
                className={`bg-background border-border pr-10 ${passwords.confirm && passwords.confirm !== passwords.new ? 'border-destructive' : ''}`}
              />
              <button type="button" onClick={() => setShowPwd((p) => ({ ...p, confirm: !p.confirm }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPwd.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {passwords.confirm && passwords.confirm !== passwords.new && (
              <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {t('pwd_err_match')}
              </p>
            )}
          </div>

          {pwdError && (
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-destructive/10 border border-destructive/30">
              <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
              <p className="text-sm text-destructive">{pwdError}</p>
            </div>
          )}
          {pwdSuccess && (
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <p className="text-sm text-primary font-medium">{t('pwd_success')}</p>
            </div>
          )}
          <Button onClick={handleUpdatePassword} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2">
            {t('update_pwd')}
          </Button>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="bg-card border-destructive/30 p-8">
        <h2 className="text-2xl font-bold text-destructive mb-2">{t('danger_zone')}</h2>
        <p className="text-sm text-muted-foreground mb-6">{t('danger_sub')}</p>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-background">
            <div>
              <p className="font-semibold text-foreground">{t('logout')}</p>
              <p className="text-sm text-muted-foreground">{t('logout_desc')}</p>
            </div>
            <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10 gap-2 shrink-0" onClick={() => setConfirmLogout(true)}>
              <LogOut className="w-4 h-4" /> {t('logout')}
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl border border-destructive/30 bg-destructive/5">
            <div>
              <p className="font-semibold text-foreground">{t('delete_acc')}</p>
              <p className="text-sm text-muted-foreground">{t('delete_desc')}</p>
            </div>
            <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10 gap-2 shrink-0" onClick={() => setConfirmDelete(true)}>
              <Trash2 className="w-4 h-4" /> {t('delete_btn')}
            </Button>
          </div>
        </div>
      </Card>

      {confirmLogout && (
        <ConfirmDialog
          title={t('confirm_logout_title')}
          message={t('confirm_logout_msg')}
          confirmLabel={t('logout')}
          onConfirm={() => { setConfirmLogout(false); logout(); router.push('/login'); }}
          onCancel={() => setConfirmLogout(false)}
        />
      )}
      {confirmDelete && (
        <ConfirmDialog
          title={t('confirm_delete_title')}
          message={t('confirm_delete_msg')}
          confirmLabel={t('yes_delete')}
          onConfirm={() => { setConfirmDelete(false); logout(); router.push('/login'); }}
          onCancel={() => setConfirmDelete(false)}
        />
      )}
    </div>
  );
}
