# Sehati Doctor Dashboard - Frontend Implementation

## Overview

The Sehati Doctor Dashboard is a comprehensive healthcare platform for doctors to manage appointments, communicate with patients, and maintain their professional information. This is a frontend-only implementation designed to work with a backend Express API (to be integrated later).

## Features Implemented

### 1. **Dashboard Page** (`/dashboard`)
The main dashboard provides an overview of the doctor's schedule and appointments.

**Key Features:**
- **Statistics Cards**: Display today's appointments, pending cases, completed cases, and absent patients
- **Interactive Calendar**: Monthly agenda view where doctors can click on any day to see appointments for that specific day
  - Days with appointments are highlighted with a visual indicator
  - Selected day shows in the main appointments list
  - Navigation to previous/next months
  
- **Search Function**: Search appointments by patient name in real-time
- **Appointment Management**:
  - View all appointments with patient information and status
  - Select multiple appointments using checkboxes
  - Mark selected appointments as "Completed" or "Patient Absent"
  - Status indicators: Waiting (yellow), Completed (green), Absent (red)

- **Quick Actions on Each Appointment**:
  - **Prescription Button**: Opens a dialog to create, review, and send digital prescriptions
  - **Message Button**: Navigate to messages to communicate with the patient

- **Patient Profile Modal**: Click on any patient to view:
  - Full name, date of birth, gender, phone number
  - Blood type and allergies
  - Medical information, chronic conditions, and current medications

### 2. **Profile Page** (`/profile`)
Complete doctor professional profile management.

**Sections:**
- **Personal Information**
  - Full name, gender, date of birth, specialty
  - Email (with verification status)
  - Phone number (with verification status)
  - Profile photo/avatar

- **Professional Details** (Editable)
  - Professional biography/summary
  - Diplomas and credentials

- **Work Schedule**
  - Set working days and hours for each day of the week
  - Toggle specific days as working or off
  - Define start and end times for each working day
  - All 7 days of the week with customizable hours

- **Edit Mode**: Click the "Edit" button to modify all information

### 3. **Messages Page** (`/messages`)
Secure communication with patients without AI chatbot.

**Features:**
- **Conversation List**:
  - All patient conversations
  - Search conversations by patient name
  - Unread message count badges
  - Last message preview with timestamp
  - Selected conversation highlighting

- **Chat Interface**:
  - Full message history with timestamps
  - Messages are color-coded (doctor's messages in primary/teal, patient's in light)
  - Real-time message display

- **Message Input**:
  - Type messages directly
  - Send on Enter (without Shift)
  - Textbox expands for longer messages

- **Empty State**: Guide user to select a conversation

### 4. **Notifications Page** (`/notifications`)
Healthcare-related alerts from patients and appointments.

**Notification Types:**
- **Appointment**: New bookings, cancellations, confirmations
- **Message**: Patient messages
- **Alert**: System alerts
- **Report**: Test results and medical reports available
- **Medication**: Patient medication reminders and feedback

**Features:**
- Filter notifications by type (All, Unread, Appointments, Messages, Alerts)
- Mark individual notifications as read
- Mark all notifications as read at once
- Delete notifications
- Unread count displayed in header
- Color-coded notification types for quick scanning

### 5. **Settings Page** (`/settings`)
Comprehensive account and preference management.

**Sections:**
- **Appearance**
  - Theme selector (Light, Dark, System)
  - Visual theme switching

- **Notifications Settings**
  - Toggle various notification types:
    - Appointment reminders
    - Patient messages
    - Patient feedback
    - Medical reports
    - Health tips & updates

- **Privacy & Security**
  - Change password (current, new, confirm)
  - Profile visibility to patients
  - Anonymous data sharing option

- **Language**
  - Select preferred language (English, French, Arabic, Spanish)

- **Danger Zone**
  - Log Out button
  - Delete Account button

## Design System

### Color Theme (Dark Mode Default)
- **Primary Color**: Teal/Mint Green (`oklch(0.55 0.195 200)`)
- **Background**: Dark (`oklch(0.15 0 0)`)
- **Foreground**: Light text (`oklch(0.98 0 0)`)
- **Card**: Slightly lighter background (`oklch(0.20 0 0)`)
- **Destructive**: Red for delete/logout actions (`oklch(0.60 0.24 25)`)
- **Muted**: Gray tones for secondary text

### Layout
- **Sidebar Navigation**: 
  - Collapsible to icon-only mode
  - Collapse button changes to primary color on hover
  - Logout button styled with destructive red color
  - Responsive: hidden on mobile, visible on desktop

- **Main Content**: 
  - Full-width with responsive padding
  - Grid layouts for cards and statistics
  - Mobile-first responsive design

### Typography
- **Font Family**: Geist (sans-serif)
- **Headings**: Bold, text-balance for proper line breaks
- **Body**: Regular weight with 1.4-1.6 line height

## Components Used

### Custom Dashboard Components
- **CalendarWidget**: Interactive monthly calendar with appointment indicators
- **StatsCards**: Display four key metrics about appointments
- **PatientProfileModal**: Modal dialog showing detailed patient information
- **PrescriptionModal**: Modal for creating and signing digital prescriptions

### UI Components (shadcn/ui)
- Button, Card, Input, Textarea, Avatar, Badge
- Dialog, Dropdown Menu, Switch, Toggle
- Select, Checkbox
- And more...

## Interactive Features

### Appointment Management
1. Click calendar dates to filter appointments by day
2. Select multiple appointments with checkboxes
3. Bulk actions: Mark Completed, Mark Absent
4. Individual actions: Create Prescription, Send Message

### Patient Communication
- Search and open patient conversations
- Send messages with Enter key
- View full message history

### Digital Prescriptions
1. Click "Prescription" on any appointment
2. View patient info
3. Add medications with details:
   - Medication name
   - Dosage
   - Instructions
   - Duration
4. Add notes
5. Digital signature review
6. Send to patient

## Technical Implementation

### Frontend Stack
- **Framework**: Next.js 16 (App Router)
- **React**: 19.2
- **Styling**: Tailwind CSS 4.2
- **UI Components**: shadcn/ui with Radix UI
- **State Management**: React hooks (useState)
- **Date Handling**: date-fns for formatting

### File Structure
```
app/
├── dashboard/         # Doctor appointments & scheduling
├── profile/           # Doctor profile management
├── messages/          # Patient communication
├── notifications/     # Healthcare alerts
├── settings/          # Account preferences
└── layout.tsx         # Root layout with theme provider

components/
├── layout/
│   ├── app-layout.tsx    # Main layout wrapper
│   ├── header.tsx        # Top header with controls
│   └── sidebar.tsx       # Navigation sidebar
├── dashboard/
│   ├── calendar-widget.tsx      # Interactive calendar
│   ├── stats-cards.tsx          # Appointment statistics
│   ├── patient-profile-modal.tsx # Patient details modal
│   └── prescription-modal.tsx    # Prescription dialog
├── theme-provider.tsx   # Dark/light mode provider
└── ui/                  # shadcn/ui components
```

## Data Models

### Appointment
```typescript
{
  id: string;
  patientName: string;
  specialty: string; // Reason for visit
  time: string;
  avatar: string;
  initials: string;
  status: 'waiting' | 'completed' | 'absent';
}
```

### Conversation
```typescript
{
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
}
```

### Notification
```typescript
{
  id: string;
  type: 'appointment' | 'message' | 'alert' | 'report' | 'medication';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}
```

## Mock Data

The application uses mock data for demonstration:
- 4 sample appointments with various statuses
- 3 sample conversations with patients
- 5 sample notifications of different types
- Doctor profile information (Dr. Mossaab)

## Future Integration Points

When integrating with a backend Express API, the following endpoints will be needed:

- **GET /api/appointments** - Fetch doctor's appointments
- **GET /api/appointments/:date** - Appointments for specific date
- **PUT /api/appointments/:id** - Update appointment status
- **GET /api/conversations** - Fetch patient conversations
- **POST /api/messages** - Send message to patient
- **GET /api/notifications** - Fetch doctor's notifications
- **PUT /api/profile** - Update doctor profile
- **GET /api/prescriptions** - Get prescription templates
- **POST /api/prescriptions** - Create and send prescription

## Navigation

The app includes a responsive sidebar with links to:
- Dashboard
- Profile
- Messages (with unread count badge)
- Notifications (with alert count badge)
- Settings

The sidebar collapses on hover showing only icons on smaller screens and can be toggled on mobile.

## Accessibility Features

- Semantic HTML (main, header tags)
- ARIA labels and roles
- Screen reader friendly text
- Keyboard navigation support
- Color contrast compliance
- Form labels associated with inputs

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- This is a frontend-only implementation designed for desktop and tablet views
- Mobile responsiveness is implemented for smaller layouts
- All data is currently stored in React state (useState)
- Backend integration will replace mock data with API calls
- Theme persistence would require localStorage or database storage when integrated with backend
