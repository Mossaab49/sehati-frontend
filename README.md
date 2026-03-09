# 🏥 Sehati — Healthcare Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38bdf8?style=for-the-badge&logo=tailwindcss)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)

**Sehati** is a modern healthcare web application connecting doctors and patients.  
Manage appointments, communicate securely, and handle digital prescriptions — all in one place.

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Demo Accounts](#-demo-accounts)
- [Database Schema](#-database-schema)
- [Team](#-team)

---

## 🌟 Overview

Sehati is divided into two interfaces:

| Interface | Description |
|-----------|-------------|
| 🩺 **Doctor Dashboard** | Manage appointments, write prescriptions, communicate with patients |
| 🧑‍⚕️ **Patient Portal** | Book appointments, chat with doctors, view medical history |

---

## ✨ Features

### 🩺 Doctor Side
- **Dashboard** — appointment calendar, daily stats, patient search
- **Appointments** — mark as completed / absent, add new appointments manually
- **Prescriptions** — create, sign, and send digital prescriptions
- **Messages** — secure real-time chat with patients
- **Profile** — manage personal info, specializations, education, work schedule
- **Notifications** — appointment alerts, messages, medical reports
- **Settings** — theme, language, password, privacy preferences
- **Reviews** — view patient feedback and ratings

### 🧑‍⚕️ Patient Side
- **Dashboard** — find doctors, upcoming appointments overview
- **Appointments** — book, view, and manage appointments
- **Messages** — chat with doctors + AI Health Assistant
- **Profile** — personal info, blood type, allergies, family members
- **Notifications** — appointment reminders and updates
- **Settings** — account preferences, language, dark/light mode

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4.2 |
| UI Components | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Theme | next-themes (dark / light / system) |
| Date handling | date-fns |

---

## 📁 Project Structure

```
sehati/
├── app/
│   ├── login/             # Login page (doctor & patient)
│   ├── signup/            # Registration with role selection
│   ├── doctor/
│   │   ├── dashboard/     # Appointments & calendar
│   │   ├── profile/       # Doctor profile & work schedule
│   │   ├── messages/      # Patient messaging
│   │   ├── notifications/ # Alerts & updates
│   │   └── settings/      # Account preferences
│   └── patient/           # Full patient portal
│
├── components/
│   ├── dashboard/         # Doctor dashboard components
│   │   ├── calendar-widget.tsx
│   │   ├── stats-cards.tsx
│   │   ├── patient-profile-modal.tsx
│   │   └── prescription-modal.tsx
│   ├── patient/           # Patient portal components
│   ├── layout/            # Sidebar, header, app layout
│   └── ui/                # shadcn/ui base components
│
├── lib/
│   ├── auth.ts            # Auth helpers
│   ├── patient-context.tsx # Global patient state
│   └── utils.ts           # Utility functions
│
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
│
├── public/                # Static assets
├── BACKEND_INTEGRATION.md # API integration guide
└── PROJECT_GUIDE.md       # Full project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/sehati.git
cd sehati

# 2. Install dependencies
pnpm install

# 3. Create environment file
cp .env.example .env.local
# Edit .env.local and set your API URL:
# NEXT_PUBLIC_API_URL=http://localhost:3001/api

# 4. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 🔐 Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| 🩺 Doctor | `dr.mossaab@sehati.com` | `Doctor@2024` |
| 🧑‍⚕️ Patient | `kaoutar.bendida@email.com` | `Patient@2024` |

> **Note:** Demo accounts use `sessionStorage` only. Connect to a real backend for persistent authentication.

---

## 🗄️ Database Schema

The backend uses **PostgreSQL**. Key tables:

### Doctor Section
| Table | Description |
|-------|-------------|
| `doctors` | Profile, credentials, location, pricing |
| `doctor_specializations` | Multiple specializations per doctor |
| `doctor_education` | Degrees and diplomas |
| `doctor_work_schedule` | Working hours per day of week |
| `reviews` | Patient ratings and comments |

### Shared Tables
| Table | Description |
|-------|-------------|
| `appointments` | Bookings between doctor and patient |
| `prescriptions` | Digital prescriptions |
| `prescription_medications` | Medications per prescription |
| `conversations` | Doctor-patient chat threads |
| `messages` | Individual messages (text, audio, document) |
| `notifications` | System alerts for both roles |

> See [`BACKEND_INTEGRATION.md`](./BACKEND_INTEGRATION.md) for full API endpoint documentation.

---

## 🎨 Design System

- **Primary color:** Teal `oklch(0.55 0.195 200)`
- **Font:** Geist (sans-serif)
- **Themes:** Dark (default), Light, System
- **Border radius:** 10px
- **Responsive:** Mobile, Tablet, Desktop

---

## 👥 Team

| Member | Responsibility |
|--------|---------------|
| **[Your Name]** | Doctor Dashboard — profile, appointments, prescriptions, messages, reviews |
| **[Teammate Name]** | Patient Portal — booking, profile, family members, AI assistant |

---

## 📄 License

This project is provided for educational and commercial use.

---

<div align="center">
  Made by Mossaab Saouti & Kaoutar Bendidi

</div>
