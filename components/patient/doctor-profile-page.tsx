"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
  CalendarPlus,
  Phone,
  Award,
  Users,
  ThumbsUp,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  GraduationCap,
  BadgeCheck,
  Heart,
  Send,
  CheckCircle2,
} from "lucide-react"
import type { Doctor } from "@/lib/patient-context"
import { AppointmentModal } from "./appointment-modal"

/* ─── Rich mock data per doctor ──────────────────────────────── */
const DOCTOR_DETAILS: Record<string, {
  experience: number
  education: { degree: string; school: string; year: string }[]
  about: string
  phone: string
  consultationFee: number
  specializations: string[]
  feedbacks: { name: string; avatar: string; rating: number; date: string; text: string; helpful: number }[]
}> = {
  "1": {
    experience: 14,
    education: [
      { degree: "MD – Cardiology", school: "Université Mohammed V, Rabat", year: "2011" },
      { degree: "Fellowship – Interventional Cardiology", school: "CHU Ibn Sina", year: "2014" },
    ],
    about: "Dr. Amina Benali is a board-certified cardiologist with 14 years of experience specializing in preventive cardiology, echocardiography, and heart failure management. She is known for her patient-first approach and has treated over 5,000 cardiac patients throughout her career.",
    phone: "+212 5 22 34 56 78",
    consultationFee: 350,
    specializations: ["Preventive Cardiology", "Echocardiography", "Heart Failure", "Arrhythmia"],
    feedbacks: [
      { name: "Karim B.", avatar: "KB", rating: 5, date: "2 weeks ago", text: "Dr. Benali took the time to explain my condition in detail. She answered every question I had and made me feel completely at ease. Highly recommended.", helpful: 18 },
      { name: "Fatima R.", avatar: "FR", rating: 5, date: "1 month ago", text: "Exceptional doctor. Very thorough examination and clear diagnosis. The clinic is modern and the staff is friendly. I will definitely come back.", helpful: 12 },
      { name: "Mehdi A.", avatar: "MA", rating: 4, date: "2 months ago", text: "Good consultation but wait time was a bit long. The doctor herself was excellent — professional, empathetic, and very knowledgeable.", helpful: 7 },
      { name: "Nadia L.", avatar: "NL", rating: 5, date: "3 months ago", text: "Life-changing experience. Dr. Benali caught something my previous doctor missed for years. Cannot thank her enough.", helpful: 24 },
      { name: "Omar S.", avatar: "OS", rating: 5, date: "4 months ago", text: "Best cardiologist in Casablanca without a doubt. Very thorough, takes time with each patient, explains everything clearly.", helpful: 15 },
    ],
  },
  "2": {
    experience: 9,
    education: [
      { degree: "MD – Dermatology", school: "Université Mohammed V, Rabat", year: "2016" },
      { degree: "DES – Aesthetic Dermatology", school: "CHU Rabat", year: "2018" },
    ],
    about: "Dr. Youssef El Idrissi is a dermatologist specializing in both medical and aesthetic dermatology. His expertise covers acne, psoriasis, eczema, and cosmetic procedures. He uses the latest laser and phototherapy technologies for optimal patient outcomes.",
    phone: "+212 5 37 67 89 01",
    consultationFee: 300,
    specializations: ["Acne & Rosacea", "Psoriasis", "Laser Therapy", "Aesthetic Procedures"],
    feedbacks: [
      { name: "Sara T.", avatar: "ST", rating: 5, date: "1 week ago", text: "My acne finally cleared after years of struggling. Dr. El Idrissi created a personalized treatment plan that actually worked!", helpful: 21 },
      { name: "Yassine M.", avatar: "YM", rating: 4, date: "3 weeks ago", text: "Very competent doctor. Explained the treatment options clearly and didn't oversell unnecessary procedures.", helpful: 9 },
      { name: "Laila H.", avatar: "LH", rating: 5, date: "2 months ago", text: "Excellent results from the laser treatment. Professional clinic, clean facilities, and a doctor who truly cares.", helpful: 14 },
    ],
  },
  "3": {
    experience: 17,
    education: [
      { degree: "MD – Pediatrics", school: "Université Hassan II, Casablanca", year: "2008" },
      { degree: "Subspecialty – Neonatology", school: "CHU Ibn Rochd", year: "2011" },
    ],
    about: "Dr. Fatima Zahra Ouazzani is a distinguished pediatrician with 17 years of experience in child health. She has a special focus on newborn care, developmental pediatrics, and childhood nutrition. Her warm and reassuring bedside manner puts both children and parents at ease.",
    phone: "+212 5 22 55 66 77",
    consultationFee: 280,
    specializations: ["Neonatology", "Developmental Pediatrics", "Childhood Nutrition", "Vaccines"],
    feedbacks: [
      { name: "Samira K.", avatar: "SK", rating: 5, date: "3 days ago", text: "Our daughter has been seeing Dr. Ouazzani since birth. She remembers every detail about our child and gives the most thoughtful care.", helpful: 31 },
      { name: "Hassan B.", avatar: "HB", rating: 5, date: "2 weeks ago", text: "Incredible pediatrician. My son was terrified of doctors before — now he actually looks forward to his appointments!", helpful: 27 },
      { name: "Aicha M.", avatar: "AM", rating: 5, date: "1 month ago", text: "Dr. Ouazzani is the best pediatrician we've ever had. Patient, knowledgeable, and genuinely cares about the children she treats.", helpful: 19 },
      { name: "Rachid E.", avatar: "RE", rating: 4, date: "2 months ago", text: "Great doctor, always thorough and explains everything in a way you understand. The only downside is getting an appointment.", helpful: 11 },
    ],
  },
  "4": {
    experience: 11,
    education: [
      { degree: "MD – Orthopedics", school: "Université Mohammed V, Rabat", year: "2014" },
      { degree: "Fellowship – Sports Medicine", school: "CHU Ibn Sina", year: "2016" },
    ],
    about: "Dr. Karim Tahiri is an orthopedic surgeon with expertise in joint replacement, sports injuries, and spine disorders. He has performed over 1,200 surgical procedures and is a pioneer in minimally invasive techniques in Morocco.",
    phone: "+212 5 24 88 99 00",
    consultationFee: 400,
    specializations: ["Joint Replacement", "Sports Injuries", "Spine Surgery", "Arthroscopy"],
    feedbacks: [
      { name: "Khalid A.", avatar: "KA", rating: 5, date: "1 week ago", text: "Dr. Tahiri performed my knee replacement surgery 6 months ago. I'm now walking without pain for the first time in years. Truly life-changing.", helpful: 42 },
      { name: "Nour E.", avatar: "NE", rating: 4, date: "1 month ago", text: "Excellent surgeon. Very precise in his diagnosis and honest about treatment options including non-surgical alternatives.", helpful: 16 },
      { name: "Tariq B.", avatar: "TB", rating: 5, date: "3 months ago", text: "After my sports injury, Dr. Tahiri got me back on the field in record time. His knowledge of sports medicine is exceptional.", helpful: 23 },
    ],
  },
  "5": {
    experience: 12,
    education: [
      { degree: "MD – Ophthalmology", school: "Université Mohammed V, Rabat", year: "2013" },
      { degree: "Fellowship – Refractive Surgery", school: "Institut Pasteur, Paris", year: "2015" },
    ],
    about: "Dr. Salma Cherkaoui is a highly rated ophthalmologist specializing in refractive surgery, cataract removal, and retinal disorders. She trained in Paris and brings international expertise to her practice in Casablanca.",
    phone: "+212 5 22 11 22 33",
    consultationFee: 350,
    specializations: ["LASIK Surgery", "Cataract Removal", "Retina Disorders", "Glaucoma"],
    feedbacks: [
      { name: "Imane B.", avatar: "IB", rating: 5, date: "5 days ago", text: "Had LASIK with Dr. Cherkaoui 2 months ago. My vision is now 20/20. The procedure was painless and the recovery was fast.", helpful: 38 },
      { name: "Amine R.", avatar: "AR", rating: 5, date: "3 weeks ago", text: "Very professional and precise. Explained all the risks and benefits of the procedure beforehand. Excellent results.", helpful: 22 },
      { name: "Widad K.", avatar: "WK", rating: 5, date: "2 months ago", text: "Dr. Cherkaoui treated my glaucoma with great care and expertise. Regular follow-ups and always available for questions.", helpful: 17 },
      { name: "Soufiane M.", avatar: "SM", rating: 4, date: "4 months ago", text: "Great experience overall. The clinic is state of the art and the doctor is very skilled. Slightly expensive but worth it.", helpful: 13 },
    ],
  },
  "6": {
    experience: 22,
    education: [
      { degree: "MD – General Medicine", school: "Université Hassan II, Casablanca", year: "2003" },
      { degree: "DU – Family Medicine", school: "CHU Ibn Rochd", year: "2006" },
    ],
    about: "Dr. Hassan Mouline is a highly experienced general practitioner with 22 years of practice in family medicine. He is known for his comprehensive approach to health, managing chronic diseases, preventive care, and being the first point of contact for all health concerns.",
    phone: "+212 5 22 77 88 99",
    consultationFee: 180,
    specializations: ["Family Medicine", "Chronic Disease Management", "Preventive Care", "Minor Surgery"],
    feedbacks: [
      { name: "Latifa E.", avatar: "LE", rating: 5, date: "1 week ago", text: "Dr. Mouline has been our family doctor for 10 years. He knows our entire medical history and always gives sound advice.", helpful: 45 },
      { name: "Abdelkader S.", avatar: "AS", rating: 5, date: "2 weeks ago", text: "Very accessible, reasonable fees, and always takes the time to listen. Rare qualities these days.", helpful: 29 },
      { name: "Zineb O.", avatar: "ZO", rating: 4, date: "1 month ago", text: "Good general practitioner. Thorough examinations and good referrals when needed. Highly reliable.", helpful: 18 },
      { name: "Hicham F.", avatar: "HF", rating: 5, date: "2 months ago", text: "Best family doctor in the neighborhood. Always available, patient with elderly patients. A true community doctor.", helpful: 33 },
      { name: "Meryem T.", avatar: "MT", rating: 5, date: "3 months ago", text: "Very caring and thorough. Has been treating my parents for years and they trust him completely.", helpful: 21 },
    ],
  },
}

/* ─── Star renderer ──────────────────────────────────────────── */
function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sz = size === "lg" ? "w-5 h-5" : size === "md" ? "w-4 h-4" : "w-3.5 h-3.5"
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`${sz} ${s <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  )
}

/* ─── Rating breakdown bar ───────────────────────────────────── */
function RatingBar({ label, count, total }: { label: string; count: number; total: number }) {
  const pct = total > 0 ? (count / total) * 100 : 0
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground w-4 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
        <div className="h-full bg-amber-400 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-muted-foreground w-5 text-right shrink-0">{count}</span>
    </div>
  )
}

/* ─── Main Component ─────────────────────────────────────────── */
export function DoctorProfilePage({
  doctor,
  onBack,
  onBook,
  onMessage,
}: {
  doctor: Doctor
  onBack: () => void
  onBook: () => void
  onMessage: () => void
}) {
  const details = DOCTOR_DETAILS[doctor.id] ?? DOCTOR_DETAILS["1"]
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [helpedIds, setHelpedIds] = useState<Set<number>>(new Set())
  const [showBooking, setShowBooking] = useState(false)

  // My review form state
  const [myRating, setMyRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [myReviewText, setMyReviewText] = useState("")
  const [reviewSubmitted, setReviewSubmitted] = useState(false)
  const [allFeedbacks, setAllFeedbacks] = useState(details.feedbacks)

  const visibleReviews = showAllReviews ? allFeedbacks : allFeedbacks.slice(0, 3)

  const ratingCounts = [5, 4, 3, 2, 1].map((s) => ({
    label: String(s),
    count: allFeedbacks.filter((f) => Math.round(f.rating) === s).length,
  }))

  const avgRating = allFeedbacks.length > 0
    ? Math.round((allFeedbacks.reduce((s, f) => s + f.rating, 0) / allFeedbacks.length) * 10) / 10
    : doctor.rating

  const handleSubmitReview = () => {
    if (!myRating || !myReviewText.trim()) return
    const newFeedback = {
      name: "You",
      avatar: "ME",
      rating: myRating,
      date: "Just now",
      text: myReviewText.trim(),
      helpful: 0,
    }
    setAllFeedbacks([newFeedback, ...allFeedbacks])
    setReviewSubmitted(true)
    setMyRating(0)
    setMyReviewText("")
  }

  const initials = doctor.name
    .split(" ")
    .slice(1)
    .map((n) => n[0])
    .join("")

  return (
    <div className="flex-1 overflow-y-auto pb-24 lg:pb-8 bg-background">
      {/* ── Hero banner ── */}
      <div className="relative bg-gradient-to-br from-primary/90 to-primary/60 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white"
              style={{
                width: `${120 + i * 80}px`,
                height: `${120 + i * 80}px`,
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%)`,
                opacity: 1 - i * 0.15,
              }}
            />
          ))}
        </div>

        {/* Back button */}
        <div className="relative px-4 pt-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to doctors
          </button>
        </div>

        {/* Doctor hero content */}
        <div className="relative px-4 pb-8 pt-4 flex flex-col sm:flex-row items-center sm:items-end gap-4">
          {/* Avatar */}
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-white font-bold text-3xl shrink-0 shadow-xl">
            {initials}
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold text-white">{doctor.name}</h1>
              <BadgeCheck className="w-5 h-5 text-white/80" />
            </div>
            <p className="text-white/80 font-medium mb-2">{doctor.specialty}</p>
            <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Stars rating={doctor.rating} size="sm" />
                <span className="text-white font-semibold text-sm">{doctor.rating}</span>
                <span className="text-white/70 text-xs">({doctor.reviews} reviews)</span>
              </div>
              {doctor.availableToday && (
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                  ✓ Available Today
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Action buttons ── */}
      <div className="px-4 -mt-4 mb-6 relative z-10">
        <div className="flex gap-3 max-w-2xl mx-auto">
          <button
            onClick={onMessage}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-card border border-border rounded-2xl text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Message
          </button>
          <button
            onClick={() => setShowBooking(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary rounded-2xl text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-md"
          >
            <CalendarPlus className="w-4 h-4" />
            Book Appointment
          </button>
        </div>
      </div>

      <div className="px-4 max-w-2xl mx-auto space-y-5">

        {/* ── Quick stats row ── */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-card rounded-2xl border border-border p-3 text-center">
            <p className="text-2xl font-bold text-primary">{details.experience}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">Years Exp.</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-3 text-center">
            <p className="text-2xl font-bold text-primary">{doctor.reviews}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">Reviews</p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-3 text-center">
            <p className="text-2xl font-bold text-primary">{details.consultationFee}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">MAD / Visit</p>
          </div>
        </div>

        {/* ── About ── */}
        <div className="bg-card rounded-2xl border border-border p-4">
          <div className="flex items-center gap-2 mb-3">
            <Stethoscope className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">About</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{details.about}</p>
        </div>

        {/* ── Info grid ── */}
        <div className="bg-card rounded-2xl border border-border p-4 space-y-3">
          <h2 className="text-sm font-bold text-foreground mb-1">Contact & Info</h2>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium text-foreground">{doctor.clinicLocation}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Next Available</p>
              <p className="text-sm font-medium text-foreground">{doctor.nextAvailable}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Navigation className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Distance</p>
              <p className="text-sm font-medium text-foreground">{doctor.distance} km away</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <a href={`tel:${details.phone}`} className="text-sm font-medium text-primary hover:underline">{details.phone}</a>
            </div>
          </div>

        </div>

        {/* ── Specializations ── */}
        <div className="bg-card rounded-2xl border border-border p-4">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Specializations</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {details.specializations.map((spec) => (
              <span
                key={spec}
                className="px-3 py-1.5 bg-primary/8 text-primary text-xs font-medium rounded-xl border border-primary/20"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <div className="bg-card rounded-2xl border border-border p-4">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-3">
            {details.education.map((edu, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu.school} · {edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Reviews section ── */}
        <div className="bg-card rounded-2xl border border-border p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <h2 className="text-sm font-bold text-foreground">Patient Reviews</h2>
            </div>
            <span className="text-xs text-muted-foreground">{allFeedbacks.length} reviews</span>
          </div>

          {/* Rating summary */}
          <div className="flex items-center gap-5 mb-5 pb-5 border-b border-border">
            <div className="text-center shrink-0">
              <p className="text-5xl font-bold text-foreground">{avgRating}</p>
              <Stars rating={avgRating} size="md" />
              <p className="text-xs text-muted-foreground mt-1">out of 5</p>
            </div>
            <div className="flex-1 space-y-1.5">
              {ratingCounts.map(({ label, count }) => (
                <RatingBar key={label} label={label} count={count} total={allFeedbacks.length} />
              ))}
            </div>
          </div>

          {/* Individual reviews */}
          <div className="space-y-4">
            {visibleReviews.map((fb, i) => (
              <div key={i} className="pb-4 border-b border-border/60 last:border-0 last:pb-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                      {fb.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{fb.name}</p>
                      <div className="flex items-center gap-2">
                        <Stars rating={fb.rating} size="sm" />
                        <span className="text-[10px] text-muted-foreground">{fb.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{fb.text}</p>
                <button
                  onClick={() => setHelpedIds((prev) => {
                    const next = new Set(prev)
                    next.has(i) ? next.delete(i) : next.add(i)
                    return next
                  })}
                  className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                    helpedIds.has(i) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  Helpful ({fb.helpful + (helpedIds.has(i) ? 1 : 0)})
                </button>
              </div>
            ))}
          </div>

          {/* Show more reviews */}
          {allFeedbacks.length > 3 && (
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="mt-4 w-full py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all flex items-center justify-center gap-2"
            >
              {showAllReviews ? (
                <><ChevronUp className="w-4 h-4" /> Show less</>
              ) : (
                <><ChevronDown className="w-4 h-4" /> Show all {allFeedbacks.length} reviews</>
              )}
            </button>
          )}
        </div>

        {/* ── Leave a Review ── */}
        <div className="bg-card rounded-2xl border border-border p-4">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Leave a Review</h2>
          </div>

          {reviewSubmitted ? (
            <div className="flex flex-col items-center py-6 gap-3 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-sm font-semibold text-foreground">Thank you for your feedback!</p>
              <p className="text-xs text-muted-foreground">Your review helps other patients make informed decisions.</p>
              <button
                onClick={() => setReviewSubmitted(false)}
                className="text-xs text-primary hover:underline mt-1"
              >
                Write another review
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Star rating picker */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">Your rating</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      onMouseEnter={() => setHoverRating(s)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setMyRating(s)}
                      className="transition-transform hover:scale-110 active:scale-95"
                      aria-label={`${s} star${s > 1 ? "s" : ""}`}
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          s <= (hoverRating || myRating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    </button>
                  ))}
                  {(hoverRating || myRating) > 0 && (
                    <span className="ml-2 text-sm font-semibold text-foreground">
                      {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][hoverRating || myRating]}
                    </span>
                  )}
                </div>
              </div>

              {/* Review text */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">Your review</p>
                <textarea
                  value={myReviewText}
                  onChange={(e) => setMyReviewText(e.target.value)}
                  placeholder="Share your experience with this doctor — consultation quality, wait time, bedside manner..."
                  rows={4}
                  className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                />
                <p className="text-[10px] text-muted-foreground mt-1 text-right">{myReviewText.length}/500</p>
              </div>

              <button
                onClick={handleSubmitReview}
                disabled={!myRating || myReviewText.trim().length < 10}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                Submit Review
              </button>

              {myRating === 0 && (
                <p className="text-xs text-muted-foreground text-center">Select a star rating to submit your review</p>
              )}
            </div>
          )}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-5 text-center">
          <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
          <h3 className="text-sm font-bold text-foreground mb-1">Ready to book?</h3>
          <p className="text-xs text-muted-foreground mb-4">
            Next available: <span className="font-semibold text-primary">{doctor.nextAvailable}</span>
          </p>
          <button
            onClick={() => setShowBooking(true)}
            className="w-full py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <CalendarPlus className="w-4 h-4" />
            Book Appointment · {details.consultationFee} MAD
          </button>
        </div>
      </div>

      {/* Booking modal */}
      {showBooking && (
        <AppointmentModal
          doctor={doctor}
          onClose={() => setShowBooking(false)}
        />
      )}
    </div>
  )
}
