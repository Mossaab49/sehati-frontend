'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Stethoscope, User, AlertCircle, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

/* ─── Demo accounts ─────────────────────────────────────────── */
const DEMO_ACCOUNTS = [
  { role: 'doctor',  email: 'dr.mossaab@sehati.com', password: 'Doctor@2024', name: 'Dr. Mossaab' },
  { role: 'patient', email: 'kaoutar.bendidi@email.com', password: 'Patient@2024', name: 'Kaoutar Bendidi' },
];

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const existingUser = getUser(); if (existingUser) router.replace(existingUser.role === 'doctor' ? '/doctor/dashboard' : '/patient');
  }, []);

  const [role, setRole]         = useState<'doctor' | 'patient'>('doctor');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd]   = useState(false);
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const handleLogin = async () => {
    setError('');
    if (!email || !password) { setError('Please fill in all fields.'); return; }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));

    const match = DEMO_ACCOUNTS.find(
      (a) => a.email === email && a.password === password && a.role === role
    );

    if (!match) {
      setError('Invalid email or password for this account type.');
      setLoading(false);
      return;
    }

    // Store auth in sessionStorage (demo)
    sessionStorage.setItem('sehati_user', JSON.stringify({ role: match.role, name: match.name, email: match.email }));
    router.push(match.role === 'doctor' ? '/doctor/dashboard' : '/patient');
  };

  const fillDemo = () => {
    const acc = DEMO_ACCOUNTS.find((a) => a.role === role)!;
    setEmail(acc.email);
    setPassword(acc.password);
    setError('');
  };

  return (
    <div className="min-h-screen flex bg-background">

      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/20 via-primary/10 to-background flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Background circles */}
        <div className="absolute top-[-80px] left-[-80px] w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 rounded-full bg-primary/8 blur-3xl" />

        <div className="relative z-10 text-center space-y-6 max-w-md">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
              <Heart className="w-7 h-7 text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="text-4xl font-bold text-foreground tracking-tight">Sehati</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground leading-tight">
            Your health, <br />our priority.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Connect with certified doctors, manage your health records, and book appointments — all in one place.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { label: 'Doctors', value: '500+' },
              { label: 'Patients', value: '12k+' },
              { label: 'Appointments', value: '98k+' },
              { label: 'Satisfaction', value: '4.9★' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md space-y-8">

          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2 mb-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Sehati</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
            <p className="text-muted-foreground mt-1">Sign in to your account to continue</p>
          </div>

          {/* Role toggle */}
          <div className="flex rounded-xl border border-border bg-background p-1 gap-1">
            <button
              onClick={() => { setRole('doctor'); setError(''); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                role === 'doctor'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              Doctor
            </button>
            <button
              onClick={() => { setRole('patient'); setError(''); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                role === 'patient'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <User className="w-4 h-4" />
              Patient
            </button>
          </div>

          {/* Demo credentials hint */}
          <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-primary/8 border border-primary/20">
            <div>
              <p className="text-xs font-semibold text-primary">Demo {role === 'doctor' ? 'Doctor' : 'Patient'} Account</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {DEMO_ACCOUNTS.find((a) => a.role === role)?.email}
              </p>
            </div>
            <button
              onClick={fillDemo}
              className="text-xs font-semibold text-primary hover:underline shrink-0"
            >
              Fill in →
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                className="bg-background border-border h-11"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-foreground">Password</label>
                <button className="text-xs text-primary hover:underline">Forgot password?</button>
              </div>
              <div className="relative">
                <Input
                  type={showPwd ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  className="bg-background border-border h-11 pr-10"
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-destructive/10 border border-destructive/20">
                <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Signing in…
                </span>
              ) : 'Sign In'}
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link href="/signup" className="text-primary font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
