'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Eye, EyeOff, Stethoscope, User, AlertCircle, Heart,
  Upload, X, FileText, CheckCircle2, ChevronRight, ChevronLeft
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

/* ─── Types ─────────────────────────────────────────────────── */
type Role = 'doctor' | 'patient';

interface UploadedFile { name: string; size: string; }

/* ─── Step indicator ──────────────────────────────────────────── */
function StepDot({ active, done, label, n }: { active: boolean; done: boolean; label: string; n: number }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all border-2 ${
        done ? 'bg-primary border-primary text-primary-foreground'
             : active ? 'border-primary text-primary bg-primary/10'
             : 'border-border text-muted-foreground'
      }`}>
        {done ? <CheckCircle2 className="w-4 h-4" /> : n}
      </div>
      <span className={`text-xs font-medium ${active || done ? 'text-primary' : 'text-muted-foreground'}`}>{label}</span>
    </div>
  );
}

/* ─── File upload zone ───────────────────────────────────────── */
function FileUpload({
  label, hint, files, onAdd, onRemove
}: {
  label: string; hint: string;
  files: UploadedFile[]; onAdd: (f: UploadedFile) => void; onRemove: (i: number) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(e.target.files || []).forEach((f) => {
      onAdd({ name: f.name, size: `${(f.size / 1024).toFixed(0)} KB` });
    });
    e.target.value = '';
  };
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground block">{label}</label>
      <p className="text-xs text-muted-foreground -mt-1">{hint}</p>
      <div
        onClick={() => ref.current?.click()}
        className="border-2 border-dashed border-border hover:border-primary/50 rounded-xl p-6 text-center cursor-pointer transition-colors group"
      >
        <Upload className="w-6 h-6 text-muted-foreground group-hover:text-primary mx-auto mb-2 transition-colors" />
        <p className="text-sm text-muted-foreground">Click to upload or drag & drop</p>
        <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG — max 10 MB each</p>
      </div>
      <input ref={ref} type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={handle} className="hidden" />
      {files.length > 0 && (
        <div className="space-y-2 mt-2">
          {files.map((f, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-background border border-border">
              <FileText className="w-4 h-4 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{f.name}</p>
                <p className="text-xs text-muted-foreground">{f.size}</p>
              </div>
              <button onClick={(e) => { e.stopPropagation(); onRemove(i); }} className="text-muted-foreground hover:text-destructive transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>('patient');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  /* shared */
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [showPwd, setShowPwd]     = useState(false);

  /* patient fields */
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [cin,       setCin]       = useState('');
  const [dob,       setDob]       = useState('');
  const [gender,    setGender]    = useState('');
  const [phone,     setPhone]     = useState('');
  const [address,   setAddress]   = useState('');
  const [bloodType, setBloodType] = useState('');

  /* doctor fields */
  const [docFirst,    setDocFirst]    = useState('');
  const [docLast,     setDocLast]     = useState('');
  const [docPhone,    setDocPhone]    = useState('');
  const [specialty,   setSpecialty]   = useState('');
  const [licenseNo,   setLicenseNo]   = useState('');
  const [hospital,    setHospital]    = useState('');
  const [experience,  setExperience]  = useState('');
  const [diplomaFiles, setDiplomaFiles] = useState<UploadedFile[]>([]);
  const [licenseFiles, setLicenseFiles] = useState<UploadedFile[]>([]);

  /* total steps */
  const totalSteps = role === 'doctor' ? 3 : 2;

  const stepLabels = role === 'doctor'
    ? ['Account', 'Personal', 'Documents']
    : ['Account', 'Personal'];

  const validateStep = () => {
    setError('');
    if (step === 1) {
      if (!email) return setError('Email is required.'), false;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Invalid email format.'), false;
      if (password.length < 8) return setError('Password must be at least 8 characters.'), false;
      if (password !== confirmPwd) return setError('Passwords do not match.'), false;
      return true;
    }
    if (step === 2) {
      if (role === 'patient') {
        if (!firstName || !lastName) return setError('First and last name are required.'), false;
        if (!cin) return setError('CIN is required.'), false;
        if (!dob) return setError('Date of birth is required.'), false;
        if (!gender) return setError('Please select a gender.'), false;
        if (!phone) return setError('Phone number is required.'), false;
      } else {
        if (!docFirst || !docLast) return setError('First and last name are required.'), false;
        if (!specialty) return setError('Specialty is required.'), false;
        if (!licenseNo) return setError('License number is required.'), false;
        if (!docPhone) return setError('Phone number is required.'), false;
      }
      return true;
    }
    if (step === 3 && role === 'doctor') {
      if (diplomaFiles.length === 0) return setError('Please upload at least one diploma.'), false;
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step < totalSteps) { setStep((s) => s + 1); }
    else handleSubmit();
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    sessionStorage.setItem('sehati_user', JSON.stringify({
      role,
      name: role === 'doctor' ? `Dr. ${docFirst} ${docLast}` : `${firstName} ${lastName}`,
      email,
    }));
    router.push(role === 'doctor' ? '/doctor/dashboard' : '/patient');
  };

  const pwdStrength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : password.length < 14 ? 3 : 4;
  const pwdColors = ['', 'bg-destructive', 'bg-orange-500', 'bg-yellow-500', 'bg-primary'];
  const pwdLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'];

  return (
    <div className="min-h-screen flex bg-background">

      {/* Left panel */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-primary/20 via-primary/8 to-background flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="relative z-10 text-center space-y-5 max-w-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
              <Heart className="w-7 h-7 text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="text-4xl font-bold text-foreground">Sehati</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground leading-tight">Join Sehati today</h2>
          <p className="text-muted-foreground leading-relaxed">
            {role === 'doctor'
              ? 'Register as a verified doctor and start managing your patients digitally.'
              : 'Create a patient account and get access to top-quality healthcare.'}
          </p>
          <div className="space-y-3 pt-4 text-left">
            {(role === 'doctor'
              ? ['Manage appointments effortlessly', 'Send digital prescriptions', 'Build your patient network', 'Secure & verified profile']
              : ['Book appointments instantly', 'Access your health records', 'Connect with top doctors', 'Private & secure']
            ).map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 overflow-y-auto">
        <div className="w-full max-w-lg py-8 space-y-6">

          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Sehati</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-foreground">Create account</h1>
            <p className="text-muted-foreground mt-1">Fill in the details to get started</p>
          </div>

          {/* Role toggle */}
          <div className="flex rounded-xl border border-border bg-background p-1 gap-1">
            <button
              onClick={() => { setRole('patient'); setStep(1); setError(''); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${role === 'patient' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <User className="w-4 h-4" /> Patient
            </button>
            <button
              onClick={() => { setRole('doctor'); setStep(1); setError(''); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${role === 'doctor' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <Stethoscope className="w-4 h-4" /> Doctor
            </button>
          </div>

          {/* Steps */}
          <div className="flex items-center gap-2">
            {stepLabels.map((label, i) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <StepDot n={i + 1} label={label} active={step === i + 1} done={step > i + 1} />
                {i < stepLabels.length - 1 && (
                  <div className={`flex-1 h-0.5 rounded-full transition-colors ${step > i + 1 ? 'bg-primary' : 'bg-border'}`} />
                )}
              </div>
            ))}
          </div>

          {/* ── Step 1 : Account ── */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg">Account credentials</h3>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => { setEmail(e.target.value); setError(''); }} className="bg-background border-border h-11" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Password</label>
                <div className="relative">
                  <Input
                    type={showPwd ? 'text' : 'password'}
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(''); }}
                    className="bg-background border-border h-11 pr-10"
                  />
                  <button type="button" onClick={() => setShowPwd((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {password.length > 0 && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-1 flex-1">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= pwdStrength ? pwdColors[pwdStrength] : 'bg-border'}`} />
                      ))}
                    </div>
                    <span className={`text-xs font-medium ${pwdStrength >= 3 ? 'text-primary' : 'text-orange-500'}`}>{pwdLabels[pwdStrength]}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Confirm Password</label>
                <Input
                  type="password"
                  placeholder="Repeat your password"
                  value={confirmPwd}
                  onChange={(e) => { setConfirmPwd(e.target.value); setError(''); }}
                  className={`bg-background border-border h-11 ${confirmPwd && confirmPwd !== password ? 'border-destructive' : ''}`}
                />
                {confirmPwd && confirmPwd !== password && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Passwords do not match</p>
                )}
              </div>
            </div>
          )}

          {/* ── Step 2 Patient : Personal info ── */}
          {step === 2 && role === 'patient' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg">Personal Information</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="Ahmed" value={firstName} onChange={(e) => { setFirstName(e.target.value); setError(''); }} className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Benali" value={lastName} onChange={(e) => { setLastName(e.target.value); setError(''); }} className="bg-background border-border" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">CIN</label>
                  <Input placeholder="AB123456" value={cin} onChange={(e) => { setCin(e.target.value.toUpperCase()); setError(''); }} className="bg-background border-border font-mono" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Date of Birth</label>
                  <Input type="date" value={dob} onChange={(e) => { setDob(e.target.value); setError(''); }} className="bg-background border-border" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Gender</label>
                  <div className="flex rounded-lg border border-border bg-background p-0.5 gap-0.5">
                    {['Male', 'Female'].map((g) => (
                      <button key={g} onClick={() => { setGender(g); setError(''); }}
                        className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${gender === g ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Blood Type</label>
                  <div className="flex flex-wrap gap-1">
                    {['A+','A−','B+','B−','AB+','AB−','O+','O−'].map((bt) => (
                      <button key={bt} onClick={() => { setBloodType(bt); setError(''); }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all ${bloodType === bt ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary/50'}`}>
                        {bt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                <Input placeholder="+212 6XX XXX XXX" value={phone} onChange={(e) => { setPhone(e.target.value); setError(''); }} className="bg-background border-border" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Address <span className="text-muted-foreground font-normal">(optional)</span></label>
                <Input placeholder="123 Rue Mohammed V, Casablanca" value={address} onChange={(e) => setAddress(e.target.value)} className="bg-background border-border" />
              </div>
            </div>
          )}

          {/* ── Step 2 Doctor : Professional info ── */}
          {step === 2 && role === 'doctor' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg">Professional Information</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="Mossaab" value={docFirst} onChange={(e) => { setDocFirst(e.target.value); setError(''); }} className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="El Idrissi" value={docLast} onChange={(e) => { setDocLast(e.target.value); setError(''); }} className="bg-background border-border" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Medical Specialty</label>
                <div className="flex flex-wrap gap-2">
                  {['General Practice','Cardiology','Dermatology','Pediatrics','Neurology','Orthopedics','Gynecology','Psychiatry','Other'].map((s) => (
                    <button key={s} onClick={() => { setSpecialty(s); setError(''); }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${specialty === s ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary/50'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">License Number</label>
                  <Input placeholder="MED-2024-XXXXX" value={licenseNo} onChange={(e) => { setLicenseNo(e.target.value.toUpperCase()); setError(''); }} className="bg-background border-border font-mono" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Years of Experience</label>
                  <Input type="number" min={0} max={60} placeholder="e.g. 10" value={experience} onChange={(e) => setExperience(e.target.value)} className="bg-background border-border" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                <Input placeholder="+212 6XX XXX XXX" value={docPhone} onChange={(e) => { setDocPhone(e.target.value); setError(''); }} className="bg-background border-border" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Hospital / Clinic <span className="text-muted-foreground font-normal">(optional)</span></label>
                <Input placeholder="CHU Ibn Sina, Rabat" value={hospital} onChange={(e) => setHospital(e.target.value)} className="bg-background border-border" />
              </div>
            </div>
          )}

          {/* ── Step 3 Doctor : Documents ── */}
          {step === 3 && role === 'doctor' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground text-lg">Upload Documents</h3>
                <p className="text-sm text-muted-foreground mt-1">Your documents will be reviewed by the Sehati team for verification.</p>
              </div>
              <FileUpload
                label="Medical Diploma(s) *"
                hint="Upload your medical degree(s). Required for account verification."
                files={diplomaFiles}
                onAdd={(f) => setDiplomaFiles((p) => [...p, f])}
                onRemove={(i) => setDiplomaFiles((p) => p.filter((_, idx) => idx !== i))}
              />
              <FileUpload
                label="Medical License / Authorization"
                hint="Optional but recommended. Speeds up the verification process."
                files={licenseFiles}
                onAdd={(f) => setLicenseFiles((p) => [...p, f])}
                onRemove={(i) => setLicenseFiles((p) => p.filter((_, idx) => idx !== i))}
              />
              <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-primary/8 border border-primary/20">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Your documents are encrypted and stored securely. They will only be used for identity verification.
                </p>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-3">
            {step > 1 && (
              <Button variant="outline" onClick={() => { setStep((s) => s - 1); setError(''); }} className="flex-1 h-11 border-border gap-2">
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={loading}
              className="flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Creating account…
                </span>
              ) : step < totalSteps ? (
                <><span>Continue</span><ChevronRight className="w-4 h-4" /></>
              ) : (
                'Create Account'
              )}
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
