'use client';

import { useState } from 'react';
import { Edit2, Mail, Phone, MapPin, Upload, Check, X, ShieldCheck, ShieldAlert, RefreshCw, ExternalLink, Navigation, Plus, Trash2, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

/* ─── helpers ─────────────────────────────────────────────────── */
function generateCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

/* ─── Reusable OTP Card ───────────────────────────────────────── */
function OtpCard({
  title,
  description,
  target,
  onVerified,
  onDismiss,
  accentClass = 'border-primary/30 bg-primary/5',
  iconClass = 'text-primary',
}: {
  title: string;
  description: React.ReactNode;
  target: string;
  onVerified: () => void;
  onDismiss?: () => void;
  accentClass?: string;
  iconClass?: string;
}) {
  const [code]        = useState(generateCode);
  const [input, setInput]   = useState('');
  const [error, setError]   = useState('');
  const [resent, setResent] = useState(false);
  const [currentCode, setCurrentCode] = useState(code);

  const handleResend = () => {
    setCurrentCode(generateCode());
    setInput('');
    setError('');
    setResent(true);
    setTimeout(() => setResent(false), 3000);
  };

  const handleConfirm = () => {
    if (input === currentCode) {
      onVerified();
    } else {
      setError('Incorrect code. Please try again.');
      setInput('');
    }
  };

  return (
    <div className={`mt-3 p-4 rounded-xl border space-y-3 ${accentClass}`}>
      <div className="flex items-center gap-2">
        <ShieldCheck className={`w-4 h-4 ${iconClass}`} />
        <p className="text-sm font-semibold text-foreground">{title}</p>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>

      {/* Simulated code */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
        <span className="text-xs text-muted-foreground">Demo code:</span>
        <span className="text-sm font-bold text-primary tracking-widest">{currentCode}</span>
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="6-digit code"
          value={input}
          maxLength={6}
          onChange={(e) => { setInput(e.target.value.replace(/\D/g, '')); setError(''); }}
          className={`bg-background border-border text-center tracking-widest font-mono text-lg ${error ? 'border-destructive' : ''}`}
        />
        <Button
          onClick={handleConfirm}
          disabled={input.length !== 6}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 shrink-0"
        >
          Confirm
        </Button>
      </div>

      {error && (
        <p className="text-xs text-destructive flex items-center gap-1">
          <X className="w-3 h-3" /> {error}
        </p>
      )}

      <div className="flex items-center justify-between pt-1">
        <button
          onClick={handleResend}
          className="flex items-center gap-1.5 text-xs text-primary hover:underline transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          {resent ? 'Code resent!' : 'Resend code'}
        </button>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="text-xs text-muted-foreground hover:text-foreground underline transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function ProfilePage() {
  const [isEditing, setIsEditing]         = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(true);

  const [profile, setProfile] = useState({
    fullName:  'Dr. Mossaab',
    email:     'mossaab@sehati.com',
    phone:     '+212 6 12 34 56 78',
    years_Exp: '10+ years',
    location:  'Casablanca, Morocco',
    address:   '123 Rue Mohammed V, Quartier des Habous, Casablanca 20000, Morocco',
    lat:       '33.5731',
    lng:       '-7.5898',
    bio:       'Experienced physician with 10+ years of practice',
    MAD:       350,
    dob:       'January 15, 1985',
    gender:    'Male',
    avatar:    'https://i.pravatar.cc/150?img=5',
  });
  const [profileCopy, setProfileCopy] = useState(profile);

  /* change detection */
  const phoneChanged = profileCopy.phone.trim() !== profile.phone.trim();
  const emailChanged = profileCopy.email.trim() !== profile.email.trim();

  /* which OTP / option card is open */
  const [showPhoneOtp,   setShowPhoneOtp]   = useState(false);
  const [showEmailOtp,   setShowEmailOtp]   = useState(false);
  const [showEmailAsk,   setShowEmailAsk]   = useState(false); // "verify or skip?" card

  /* whether phone has been verified during this edit session */
  const [phoneVerifiedNow, setPhoneVerifiedNow] = useState(false);

  const [isEditingSchedule, setIsEditingSchedule] = useState(false);

  /* ── Specializations ── */
  const [specializations, setSpecializations] = useState<string[]>([
    'General Medicine', 'Preventive Care', 'Chronic Disease Management',
  ]);
  const [isEditingSpecs, setIsEditingSpecs] = useState(false);
  const [specsCopy, setSpecsCopy] = useState<string[]>([]);
  const [newSpec, setNewSpec] = useState('');

  const startEditSpecs = () => { setSpecsCopy([...specializations]); setNewSpec(''); setIsEditingSpecs(true); };
  const cancelEditSpecs = () => { setIsEditingSpecs(false); setNewSpec(''); };
  const saveSpecs = () => { setSpecializations(specsCopy.filter((s) => s.trim())); setIsEditingSpecs(false); setNewSpec(''); };
  const addSpec = () => {
    const v = newSpec.trim();
    if (v && !specsCopy.includes(v)) { setSpecsCopy([...specsCopy, v]); }
    setNewSpec('');
  };

  /* ── Education ── */
  interface EducationEntry { id: string; degree: string; school: string; year: string; }
  const [education, setEducation] = useState<EducationEntry[]>([
    { id: '1', degree: 'MD – General Medicine', school: 'Université Mohammed V, Rabat', year: '2010' },
    { id: '2', degree: 'DU – Family Medicine',  school: 'CHU Ibn Rochd, Casablanca',   year: '2013' },
  ]);
  const [isEditingEdu, setIsEditingEdu] = useState(false);
  const [eduCopy, setEduCopy] = useState<EducationEntry[]>([]);

  const startEditEdu = () => { setEduCopy(education.map((e) => ({ ...e }))); setIsEditingEdu(true); };
  const cancelEditEdu = () => { setIsEditingEdu(false); };
  const saveEdu = () => {
    setEducation(eduCopy.filter((e) => e.degree.trim() || e.school.trim()));
    setIsEditingEdu(false);
  };
  const addEduEntry = () => {
    setEduCopy([...eduCopy, { id: Date.now().toString(), degree: '', school: '', year: '' }]);
  };
  const updateEduField = (id: string, field: keyof EducationEntry, value: string) => {
    setEduCopy(eduCopy.map((e) => e.id === id ? { ...e, [field]: value } : e));
  };
  const removeEduEntry = (id: string) => {
    setEduCopy(eduCopy.filter((e) => e.id !== id));
  };

  /* Work schedule */
  const [workSchedule, setWorkSchedule] = useState({
    monday:    { enabled: true,  start: '09:00', end: '17:00' },
    tuesday:   { enabled: true,  start: '09:00', end: '17:00' },
    wednesday: { enabled: true,  start: '09:00', end: '17:00' },
    thursday:  { enabled: true,  start: '09:00', end: '17:00' },
    friday:    { enabled: true,  start: '09:00', end: '17:00' },
    saturday:  { enabled: false, start: '10:00', end: '14:00' },
    sunday:    { enabled: false, start: '',      end: ''      },
  });
  const [scheduleCopy, setScheduleCopy] = useState(workSchedule);

  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  /* ── edit helpers ── */
  const startEdit = () => {
    setProfileCopy(profile);
    setShowPhoneOtp(false);
    setShowEmailOtp(false);
    setShowEmailAsk(false);
    setPhoneVerifiedNow(false);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setShowPhoneOtp(false);
    setShowEmailOtp(false);
    setShowEmailAsk(false);
    setPhoneVerifiedNow(false);
  };

  /* ── Save button logic ── */
  const handleSave = () => {
    // 1. If phone changed and NOT verified yet → must verify first
    if (phoneChanged && !phoneVerifiedNow) {
      setShowPhoneOtp(true);
      setShowEmailOtp(false);
      setShowEmailAsk(false);
      return;
    }

    // 2. Phone OK. If email changed → ask user to verify or skip
    if (emailChanged && !showEmailAsk && !showEmailOtp) {
      setShowEmailAsk(true);
      return;
    }

    // 3. All good → commit
    commitSave();
  };

  const commitSave = (newEmailVerified?: boolean) => {
    setProfile(profileCopy);
    if (phoneChanged) setPhoneVerified(true);
    if (newEmailVerified !== undefined) setEmailVerified(newEmailVerified);
    setIsEditing(false);
    setShowPhoneOtp(false);
    setShowEmailOtp(false);
    setShowEmailAsk(false);
    setPhoneVerifiedNow(false);
  };

  /* phone verified callback */
  const onPhoneVerified = () => {
    setPhoneVerifiedNow(true);
    setShowPhoneOtp(false);
    // If email also changed, ask about it
    if (emailChanged) {
      setShowEmailAsk(true);
    } else {
      commitSave();
    }
  };

  /* avatar */
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setProfileCopy({ ...profileCopy, avatar: reader.result as string });
    reader.readAsDataURL(file);
  };

  /* whether Save should be visually blocked */
  const saveBlocked = phoneChanged && !phoneVerifiedNow;

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 max-w-4xl mx-auto">

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">My Profile</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-2">Manage your personal information and professional details.</p>
      </div>

      {/* Personal Information */}
      <Card className="bg-card border-border p-8">
        <div className="flex items-start justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Personal Information</h2>
          {!isEditing ? (
            <Button onClick={startEdit} className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Edit2 className="w-4 h-4" /> Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button
                onClick={handleSave}
                disabled={saveBlocked}
                title={saveBlocked ? 'Please verify your new phone number first' : ''}
                className={`gap-2 ${saveBlocked ? 'opacity-50 cursor-not-allowed bg-primary/60' : 'bg-primary hover:bg-primary/90'} text-primary-foreground`}
              >
                <Check className="w-4 h-4" /> Save
              </Button>
              <Button onClick={cancelEdit} variant="outline" className="gap-2 border-border">
                <X className="w-4 h-4" /> Cancel
              </Button>
            </div>
          )}
        </div>

        {/* Avatar + name row */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8 pb-8 border-b border-border">
          <div className="relative self-start">
            <Avatar className="w-24 h-24">
              <AvatarImage src={isEditing ? profileCopy.avatar : profile.avatar} alt={profile.fullName} />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">DM</AvatarFallback>
            </Avatar>
            {isEditing && (
              <label className="absolute bottom-0 right-0 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-2 cursor-pointer transition-colors">
                <Upload className="w-4 h-4" />
                <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
              </label>
            )}
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="text-xs text-muted-foreground font-semibold mb-2 block">Full Name</label>
                {isEditing
                  ? <Input value={profileCopy.fullName} onChange={(e) => setProfileCopy({ ...profileCopy, fullName: e.target.value })} className="bg-background border-border" />
                  : <p className="font-semibold text-foreground text-lg">{profile.fullName}</p>}
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-semibold mb-2 block">Years of experience</label>
                {isEditing
                  ? <Input value={profileCopy.years_Exp} onChange={(e) => setProfileCopy({ ...profileCopy, years_Exp: e.target.value })} className="bg-background border-border" />
                  : <Badge className="w-fit bg-primary text-primary-foreground">{profile.years_Exp}</Badge>}
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-semibold mb-2 block">Date of Birth</label>
                <p className="font-medium text-foreground">{profile.dob}</p>
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-semibold mb-2 block">Gender</label>
                <p className="font-medium text-foreground">{profile.gender}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* ── Email ── */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <label className="text-xs font-semibold">Email Address</label>
            </div>
            {isEditing
              ? <Input
                  value={profileCopy.email}
                  onChange={(e) => {
                    setProfileCopy({ ...profileCopy, email: e.target.value });
                    setShowEmailAsk(false);
                    setShowEmailOtp(false);
                  }}
                  className="bg-background border-border"
                />
              : <p className="text-foreground font-medium">{profile.email}</p>}

            <Badge variant="outline" className={`w-fit text-xs gap-1 ${
              emailVerified ? 'border-green-500/50 text-green-500' : 'border-orange-500/50 text-orange-500'
            }`}>
              <span className={`w-2 h-2 rounded-full ${emailVerified ? 'bg-green-500' : 'bg-orange-500'}`} />
              {emailVerified ? 'Verified' : 'Unverified'}
            </Badge>

            {/* "Verify or skip?" card — shown after phone is ok and email changed */}
            {showEmailAsk && !showEmailOtp && (
              <div className="mt-3 p-4 rounded-xl border border-orange-500/30 bg-orange-500/5 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-orange-500" />
                  <p className="text-sm font-semibold text-foreground">Verify your email?</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your new email <span className="font-medium text-foreground">{profileCopy.email}</span> is not verified. Would you like to verify it now?
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => { setShowEmailAsk(false); setShowEmailOtp(true); }}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" /> Verify Email
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => commitSave(false)}
                    className="border-border text-muted-foreground"
                  >
                    Leave Unverified
                  </Button>
                </div>
              </div>
            )}

            {/* Single OTP card — works in both edit and read mode */}
            {showEmailOtp && (
              <OtpCard
                title="Confirm your email"
                description={<>Enter the code sent to <span className="font-medium text-foreground">{isEditing ? profileCopy.email : profile.email}</span>.</>}
                target={isEditing ? profileCopy.email : profile.email}
                onVerified={() => {
                  if (isEditing) {
                    commitSave(true);
                  } else {
                    setEmailVerified(true);
                    setShowEmailOtp(false);
                  }
                }}
                onDismiss={() => {
                  setShowEmailOtp(false);
                  if (isEditing) setShowEmailAsk(true);
                }}
              />
            )}

            {/* Verify now button — only in read mode when not verified and OTP not open */}
            {!isEditing && !emailVerified && !showEmailOtp && (
              <button
                onClick={() => setShowEmailOtp(true)}
                className="flex items-center gap-1.5 text-xs text-primary hover:underline mt-1"
              >
                <ShieldCheck className="w-3.5 h-3.5" /> Verify now
              </button>
            )}
          </div>

          {/* ── Phone ── */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <label className="text-xs font-semibold">Phone Number</label>
            </div>
            {isEditing
              ? <Input
                  value={profileCopy.phone}
                  onChange={(e) => {
                    setProfileCopy({ ...profileCopy, phone: e.target.value });
                    setPhoneVerifiedNow(false);
                    setShowPhoneOtp(false);
                  }}
                  className={`bg-background border-border ${phoneChanged && !phoneVerifiedNow ? 'border-orange-500/60' : ''}`}
                />
              : <p className="text-foreground font-medium">{profile.phone}</p>}

            <Badge variant="outline" className={`w-fit text-xs gap-1 ${
              (!phoneChanged && phoneVerified) || phoneVerifiedNow
                ? 'border-green-500/50 text-green-500'
                : 'border-orange-500/50 text-orange-500'
            }`}>
              <span className={`w-2 h-2 rounded-full ${
                (!phoneChanged && phoneVerified) || phoneVerifiedNow ? 'bg-green-500' : 'bg-orange-500'
              }`} />
              {(!phoneChanged && phoneVerified) || phoneVerifiedNow ? 'Verified' : 'Unverified — required to save'}
            </Badge>

            {/* Phone OTP card — shown when phone changed */}
            {showPhoneOtp && (
              <OtpCard
                title="Verify your new number"
                description={<>Enter the code sent to <span className="font-medium text-foreground">{profileCopy.phone}</span>.</>}
                target={profileCopy.phone}
                onVerified={onPhoneVerified}
                onDismiss={() => setShowPhoneOtp(false)}
              />
            )}

            {/* Inline hint when phone changed but not yet verified */}
            {isEditing && phoneChanged && !phoneVerifiedNow && !showPhoneOtp && (
              <button
                onClick={() => setShowPhoneOtp(true)}
                className="flex items-center gap-1.5 text-xs text-primary hover:underline mt-1"
              >
                <ShieldCheck className="w-3.5 h-3.5" /> Verify new number
              </button>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <label className="text-xs font-semibold">Location</label>
          </div>

          {isEditing ? (
            <div className="space-y-3">
              {/* City / Region */}
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">City / Region</label>
                <Input
                  value={profileCopy.location}
                  onChange={(e) => setProfileCopy({ ...profileCopy, location: e.target.value })}
                  className="bg-background border-border"
                  placeholder="e.g. Casablanca, Morocco"
                />
              </div>
              {/* Full address */}
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Full Address</label>
                <Input
                  value={profileCopy.address}
                  onChange={(e) => setProfileCopy({ ...profileCopy, address: e.target.value })}
                  className="bg-background border-border"
                  placeholder="e.g. 123 Rue Mohammed V, Casablanca 20000"
                />
              </div>
              {/* Coordinates row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Latitude</label>
                  <Input
                    value={profileCopy.lat}
                    onChange={(e) => setProfileCopy({ ...profileCopy, lat: e.target.value })}
                    className="bg-background border-border"
                    placeholder="e.g. 33.5731"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Longitude</label>
                  <Input
                    value={profileCopy.lng}
                    onChange={(e) => setProfileCopy({ ...profileCopy, lng: e.target.value })}
                    className="bg-background border-border"
                    placeholder="e.g. -7.5898"
                  />
                </div>
              </div>
              {/* Preview link */}
              {profileCopy.lat && profileCopy.lng && (
                <a
                  href={`https://www.google.com/maps?q=${profileCopy.lat},${profileCopy.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Preview on Google Maps
                </a>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-foreground font-medium">{profile.location}</p>
              {profile.address && (
                <p className="text-sm text-muted-foreground">{profile.address}</p>
              )}
              {/* Google Maps button */}
              {(profile.lat && profile.lng) ? (
                <a
                  href={`https://www.google.com/maps?q=${profile.lat},${profile.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-colors border border-primary/20"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Open in Google Maps
                </a>
              ) : profile.address ? (
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(profile.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-colors border border-primary/20"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Open in Google Maps
                </a>
              ) : null}
            </div>
          )}
        </div>

        {/* Bio */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground block">Professional Bio</label>
          {isEditing
            ? <Textarea value={profileCopy.bio} onChange={(e) => setProfileCopy({ ...profileCopy, bio: e.target.value })} className="bg-background border-border resize-none" rows={4} />
            : <p className="text-foreground">{profile.bio}</p>}
        </div>

        {/* MAD */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground block">MAD</label>
          {isEditing
            ? <Input type="number" value={profileCopy.MAD.toString()} onChange={(e) => setProfileCopy({ ...profileCopy, MAD: Number(e.target.value) || 0 })} className="bg-background border-border" />
            : <p className="text-foreground">{profile.MAD}</p>}
        </div>
      </Card>

      {/* Work Schedule */}
      <Card className="bg-card border-border p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Work Schedule</h2>
          {!isEditingSchedule ? (
            <Button onClick={() => { setScheduleCopy({...workSchedule}); setIsEditingSchedule(true); }} className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Edit2 className="w-4 h-4" /> Edit Schedule
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={() => { setIsEditingSchedule(false); }} className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Check className="w-4 h-4" /> Save
              </Button>
              <Button onClick={() => { setWorkSchedule(scheduleCopy); setIsEditingSchedule(false); }} variant="outline" className="gap-2 border-border">
                <X className="w-4 h-4" /> Cancel
              </Button>
            </div>
          )}
        </div>
        <div className="space-y-3">
          {days.map((day) => {
            const key = day.toLowerCase() as keyof typeof workSchedule;
            const isWeekend = key === "saturday" || key === "sunday";
            return (
              <div
                key={day}
                className={`rounded-xl border transition-all ${
                  workSchedule[key].enabled
                    ? "bg-primary/5 border-primary/20"
                    : "bg-background border-border opacity-60"
                }`}
              >
                {/* Top row: toggle + day name + status badge */}
                <div className="flex items-center gap-3 p-3 pb-2">
                  {/* Toggle */}
                  <button
                    disabled={!isEditingSchedule}
                    onClick={() =>
                      setWorkSchedule({
                        ...workSchedule,
                        [key]: { ...workSchedule[key], enabled: !workSchedule[key].enabled },
                      })
                    }
                    className={`relative w-10 h-6 rounded-full transition-colors shrink-0 ${
                      workSchedule[key].enabled ? "bg-primary" : "bg-border"
                    } ${!isEditingSchedule ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <span
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${
                        workSchedule[key].enabled ? "left-5" : "left-1"
                      }`}
                    />
                  </button>

                  {/* Day name */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm ${workSchedule[key].enabled ? "text-foreground" : "text-muted-foreground"}`}>
                      {day}
                      {isWeekend && (
                        <span className="ml-1.5 text-xs font-normal text-muted-foreground">Weekend</span>
                      )}
                    </p>
                  </div>

                  {/* Status badge */}
                  <div className={`shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                    workSchedule[key].enabled
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {workSchedule[key].enabled ? "Working" : "Off"}
                  </div>
                </div>

                {/* Hours row — shown only when enabled */}
                {workSchedule[key].enabled && (
                  <div className="flex items-center gap-2 px-3 pb-3">
                    <Input
                      type="time"
                      value={workSchedule[key].start}
                      onChange={(e) =>
                        setWorkSchedule({ ...workSchedule, [key]: { ...workSchedule[key], start: e.target.value } })
                      }
                      disabled={!isEditingSchedule}
                      className="bg-background border-border flex-1 min-w-0 text-sm h-9"
                    />
                    <span className="text-muted-foreground font-medium text-sm shrink-0">—</span>
                    <Input
                      type="time"
                      value={workSchedule[key].end}
                      onChange={(e) =>
                        setWorkSchedule({ ...workSchedule, [key]: { ...workSchedule[key], end: e.target.value } })
                      }
                      disabled={!isEditingSchedule}
                      className="bg-background border-border flex-1 min-w-0 text-sm h-9"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* ── Specializations ── */}
      <Card className="bg-card border-border p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Specializations</h2>
          </div>
          {!isEditingSpecs ? (
            <Button onClick={startEditSpecs} variant="outline" className="gap-2 border-border" size="sm">
              <Edit2 className="w-3.5 h-3.5" /> Edit
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={saveSpecs} size="sm" className="gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Check className="w-3.5 h-3.5" /> Save
              </Button>
              <Button onClick={cancelEditSpecs} size="sm" variant="outline" className="gap-1.5 border-border">
                <X className="w-3.5 h-3.5" /> Cancel
              </Button>
            </div>
          )}
        </div>

        {!isEditingSpecs ? (
          specializations.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {specializations.map((spec) => (
                <span key={spec} className="px-3 py-1.5 bg-primary/8 text-primary text-sm font-medium rounded-xl border border-primary/20">
                  {spec}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic">No specializations added yet.</p>
          )
        ) : (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 min-h-[40px]">
              {specsCopy.map((spec, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/8 text-primary text-sm font-medium rounded-xl border border-primary/20">
                  {spec}
                  <button
                    onClick={() => setSpecsCopy(specsCopy.filter((_, idx) => idx !== i))}
                    className="text-primary/60 hover:text-destructive transition-colors ml-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
              {specsCopy.length === 0 && (
                <p className="text-sm text-muted-foreground italic self-center">No specializations yet — add some below.</p>
              )}
            </div>
            <div className="flex gap-2 pt-1">
              <Input
                value={newSpec}
                onChange={(e) => setNewSpec(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addSpec(); } }}
                placeholder="e.g. Cardiology, Pediatrics..."
                className="bg-background border-border flex-1"
              />
              <Button
                onClick={addSpec}
                disabled={!newSpec.trim()}
                size="sm"
                className="gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
              >
                <Plus className="w-3.5 h-3.5" /> Add
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Press Enter or click Add to add a specialization.</p>
          </div>
        )}
      </Card>

      {/* ── Education ── */}
      <Card className="bg-card border-border p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Education</h2>
          </div>
          {!isEditingEdu ? (
            <Button onClick={startEditEdu} variant="outline" className="gap-2 border-border" size="sm">
              <Edit2 className="w-3.5 h-3.5" /> Edit
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={saveEdu} size="sm" className="gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Check className="w-3.5 h-3.5" /> Save
              </Button>
              <Button onClick={cancelEditEdu} size="sm" variant="outline" className="gap-1.5 border-border">
                <X className="w-3.5 h-3.5" /> Cancel
              </Button>
            </div>
          )}
        </div>

        {!isEditingEdu ? (
          education.length > 0 ? (
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">{edu.degree || '—'}</p>
                    <p className="text-sm text-muted-foreground">{edu.school}{edu.year ? ` · ${edu.year}` : ''}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic">No education entries added yet.</p>
          )
        ) : (
          <div className="space-y-4">
            {eduCopy.map((edu, i) => (
              <div key={edu.id} className="p-4 rounded-xl border border-border bg-background space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Degree {i + 1}</p>
                  <button
                    onClick={() => removeEduEntry(edu.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors p-1 rounded-lg hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Diploma / Degree Name</label>
                  <Input
                    value={edu.degree}
                    onChange={(e) => updateEduField(edu.id, 'degree', e.target.value)}
                    placeholder="e.g. MD – Cardiology, MSc Public Health..."
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">University / Institution</label>
                  <Input
                    value={edu.school}
                    onChange={(e) => updateEduField(edu.id, 'school', e.target.value)}
                    placeholder="e.g. Université Mohammed V, Rabat"
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Year of Graduation</label>
                  <Input
                    value={edu.year}
                    onChange={(e) => updateEduField(edu.id, 'year', e.target.value)}
                    placeholder="e.g. 2015"
                    maxLength={4}
                    className="bg-card border-border w-32"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addEduEntry}
              className="w-full py-3 rounded-xl border-2 border-dashed border-border hover:border-primary/40 hover:bg-primary/5 text-sm font-medium text-muted-foreground hover:text-primary transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add another diploma
            </button>
          </div>
        )}
      </Card>


    </div>
  );
}
