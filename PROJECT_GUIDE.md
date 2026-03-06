# Sehati Doctor Dashboard - Complete Project Guide

## Project Overview

The Sehati Doctor Dashboard is a modern healthcare web application that enables doctors to manage their appointments, communicate with patients, maintain their professional information, and handle digital prescriptions. This is a fully functional frontend implementation built with Next.js 16 and TypeScript, designed to integrate with an Express.js backend (to be developed separately).

## What's Included

### Completed Features

✅ **Dashboard** - Appointment management with interactive calendar
✅ **Profile** - Doctor professional information and work schedule management
✅ **Messages** - Secure patient communication
✅ **Notifications** - Healthcare alerts and updates
✅ **Settings** - Account preferences and privacy controls
✅ **Dark/Light Theme** - Full theme support with system preference detection
✅ **Responsive Design** - Mobile, tablet, and desktop layouts
✅ **Digital Prescriptions** - Create, sign, and send prescriptions
✅ **Patient Search** - Find patients among appointments
✅ **Status Management** - Mark appointments as completed or patient absent

## Technology Stack

### Core
- **Next.js 16** - React framework with App Router
- **React 19.2** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4.2** - Utility-first CSS framework

### Components & UI
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
- **next-themes** - Theme management

### Date & Time
- **date-fns** - Date formatting and manipulation

### Development
- **ESLint** - Code quality
- **PostCSS** - CSS processing

## Project Structure

```
sehati-doctor-dashboard/
├── app/
│   ├── dashboard/
│   │   └── page.tsx              # Main dashboard with calendar and appointments
│   ├── profile/
│   │   └── page.tsx              # Doctor profile and work schedule
│   ├── messages/
│   │   └── page.tsx              # Patient messaging interface
│   ├── notifications/
│   │   └── page.tsx              # Healthcare alerts and notifications
│   ├── settings/
│   │   └── page.tsx              # Account settings and preferences
│   ├── layout.tsx                # Root layout with theme provider
│   ├── globals.css               # Global styles and CSS variables
│   └── page.tsx                  # Home/redirect page
│
├── components/
│   ├── layout/
│   │   ├── app-layout.tsx        # Main layout wrapper
│   │   ├── header.tsx            # Top navigation header
│   │   └── sidebar.tsx           # Left navigation sidebar
│   ├── dashboard/
│   │   ├── calendar-widget.tsx   # Interactive monthly calendar
│   │   ├── stats-cards.tsx       # Appointment statistics
│   │   ├── patient-profile-modal.tsx  # Patient details modal
│   │   └── prescription-modal.tsx     # Prescription creation dialog
│   ├── theme-provider.tsx        # Dark/light mode provider
│   └── ui/                       # shadcn/ui components (60+ components)
│
├── lib/
│   └── utils.ts                  # Utility functions (cn, etc.)
│
├── hooks/
│   ├── use-mobile.ts             # Mobile detection hook
│   └── use-toast.ts              # Toast notification hook
│
├── public/
│   ├── icons/                    # App icons and favicons
│   ├── placeholder-*.{jpg,svg}   # Placeholder images
│   └── doctor-dashboard.jpg      # Dashboard preview
│
├── DOCTOR_DASHBOARD_README.md    # Feature documentation
├── BACKEND_INTEGRATION.md        # Backend API integration guide
├── PROJECT_GUIDE.md              # This file
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind CSS config
├── postcss.config.mjs            # PostCSS config
├── next.config.mjs               # Next.js config
└── components.json               # shadcn/ui config
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm
- Git
- Code editor (VS Code recommended)

### Installation

1. **Clone and install dependencies:**
   ```bash
   cd sehati-doctor-dashboard
   pnpm install
   ```

2. **Run development server:**
   ```bash
   pnpm dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

### Project Setup

The project comes pre-configured with:
- Next.js 16 with App Router
- Tailwind CSS 4.2
- TypeScript
- shadcn/ui components
- Dark/light theme support

## Key Features Explained

### 1. Dashboard (/dashboard)
The main hub for doctor workflow:
- **Calendar View**: Interactive monthly calendar showing appointment dates
- **Day Selection**: Click any date to filter appointments for that day
- **Appointment List**: Shows patient name, specialty, time, and status
- **Bulk Actions**: Select multiple appointments and mark as completed or absent
- **Quick Actions**: Create prescriptions or send messages for each appointment
- **Statistics**: Overview of total, pending, completed, and absent appointments
- **Patient Search**: Find patients by name in real-time

### 2. Profile (/profile)
Professional information management:
- **Personal Info**: Name, gender, date of birth
- **Contact Details**: Email (with verification badge) and phone (with verification badge)
- **Professional Details**: Specialty, biography, diplomas/credentials
- **Work Schedule**: Set working hours for each day of the week
- **Edit Mode**: Toggle to edit all information
- **Profile Photo**: Display and update doctor's avatar

### 3. Messages (/messages)
Secure patient communication:
- **Conversation List**: All patient conversations with search
- **Unread Badges**: Quick visual indicator of unread messages
- **Full Chat**: Complete message history with timestamps
- **Message Input**: Send messages with Enter key
- **Patient Info**: View sender's name and status (active/inactive)
- **Message Threading**: Organized by conversation

### 4. Notifications (/notifications)
Healthcare alerts and updates:
- **Notification Types**: Appointments, messages, alerts, reports, medication
- **Filter System**: View all, unread, or specific types
- **Color Coding**: Each type has distinct visual indicator
- **Mark as Read**: Individual or bulk mark as read
- **Delete Action**: Remove notifications
- **Unread Counter**: Clear count in header

### 5. Settings (/settings)
Account preferences and security:
- **Theme Selection**: Light, dark, or system preference
- **Notifications Settings**: Control what alerts you receive
- **Privacy Controls**: Profile visibility and data sharing
- **Password Change**: Secure password update form
- **Language Selection**: English, French, Arabic, Spanish
- **Account Actions**: Log out or delete account

## User Interface

### Design System
- **Primary Color**: Teal/Mint (#55c7a8 in RGB, oklch(0.55 0.195 200))
- **Theme**: Dark mode by default with light mode support
- **Typography**: Geist font family (sans-serif)
- **Spacing**: Tailwind spacing scale (4px base unit)
- **Shadows**: Subtle elevation shadows
- **Border Radius**: 0.625rem (10px)

### Layout Components
- **Sidebar**: Collapsible navigation (800px breakpoint)
- **Header**: Top navigation with theme toggle, settings, notifications
- **Main Content**: Full-width responsive container
- **Cards**: Consistent card design for content sections
- **Modals**: Dialog boxes for prescriptions and patient details

### Responsive Design
- **Mobile**: Single column, full-width sidebar overlay
- **Tablet**: Adjusted spacing, two-column layouts
- **Desktop**: Multi-column layouts, expanded sidebar

## Color Usage

The application uses a limited, cohesive color palette:
- **Primary (Teal)**: Active states, buttons, highlights
- **Destructive (Red)**: Delete actions, logout, warnings
- **Success (Green)**: Completed status, verification badges
- **Warning (Yellow)**: Pending/waiting status
- **Neutral (Gray)**: Text, borders, backgrounds
- **Info (Blue)**: Information messages, appointments

## Component Architecture

### Custom Components
1. **StatsCards** - Display KPIs about appointments
2. **CalendarWidget** - Interactive month calendar with appointments
3. **PatientProfileModal** - Detailed patient information modal
4. **PrescriptionModal** - Create and send digital prescriptions

### shadcn/ui Integration
The project includes 60+ shadcn/ui components:
- Form components: Button, Input, Textarea, Switch, Select
- Display components: Card, Badge, Avatar, Alert
- Dialog components: Dialog, AlertDialog, Drawer
- Navigation: Sidebar, Breadcrumb, DropdownMenu
- And many more...

## State Management

Currently uses React hooks for state:
- `useState` - Component local state
- `useEffect` - Side effects (would be replaced by API calls)
- `useTheme` - Theme switching from next-themes
- `usePathname` - Route-based logic from Next.js

**Future Integration**: Replace with API calls and optional global state management (Redux, Zustand, Context API).

## Styling Approach

### Tailwind CSS
- Utility-first CSS framework
- Custom design tokens in `globals.css`
- Dark mode support with `.dark` class
- Responsive design with `md:`, `lg:`, `xl:` prefixes

### CSS Variables (Design Tokens)
```css
--primary: oklch(0.55 0.195 200);        /* Teal */
--destructive: oklch(0.60 0.24 25);      /* Red */
--background: oklch(0.15 0 0);           /* Dark bg */
--foreground: oklch(0.98 0 0);           /* Light text */
```

## How to Customize

### Change Primary Color
1. Edit `app/globals.css`:
   ```css
   .dark {
     --primary: oklch(YOUR_HUE);
   }
   ```

### Add New Page
1. Create new folder in `app/`:
   ```bash
   mkdir app/newpage
   touch app/newpage/page.tsx
   ```
2. Create route with layout
3. Add navigation link in `sidebar.tsx`

### Modify Components
1. Edit files in `components/`
2. Restart dev server if needed
3. Changes appear immediately with HMR

### Update Mock Data
1. Find `MOCK_` arrays in page files
2. Replace with API calls when backend is ready
3. Update types to match API responses

## Best Practices Implemented

### Code Organization
- Component-based architecture
- Separation of concerns
- Reusable components
- Clear file naming

### Performance
- Code splitting via Next.js
- Image optimization
- CSS minification via Tailwind
- Lazy component loading

### Accessibility
- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Color contrast compliance
- Screen reader support

### Security (Frontend)
- Input sanitization in components
- No sensitive data in client-side code
- Secure API integration pattern ready
- HTTPS ready for deployment

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

### Traditional Server
```bash
pnpm build
pnpm start
```

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_NAME=Sehati
```

## Testing Locally

### Test Different Screen Sizes
- Open DevTools (F12)
- Click device toggle (top-left)
- Test with different screen sizes

### Test Dark/Light Theme
- Click sun/moon icon in header
- Theme persists across pages

### Test Responsive Layout
- Resize browser window
- Check sidebar collapses at 768px
- Mobile menu works properly

### Test Interactions
- Click calendar dates
- Select appointments with checkboxes
- Open modals and dialogs
- Test form inputs

## Common Tasks

### Add New Notification Type
1. Update `Notification` type in `app/notifications/page.tsx`
2. Add icon in `getTypeColor()` and `getTypeBgColor()` functions
3. Add sample notification to `MOCK_NOTIFICATIONS`

### Create New Appointment
1. Add to `MOCK_APPOINTMENTS` array
2. Or implement form when connected to backend

### Send Message
1. Type in message input
2. Press Enter or click Send button
3. Message appears in chat (currently simulated)

### Change Theme
1. Click Sun/Moon icon in header
2. Theme switches immediately
3. Preference persists (when localStorage enabled)

## Troubleshooting

### Port 3000 Already in Use
```bash
lsof -i :3000  # Find process
kill -9 <PID>  # Kill process
```

### Tailwind Styles Not Showing
```bash
pnpm install          # Reinstall dependencies
rm -rf .next         # Clear Next.js cache
pnpm dev             # Restart dev server
```

### Theme Not Switching
1. Check localStorage is enabled
2. Clear browser cache
3. Verify `theme-provider.tsx` is in layout

### Images Not Loading
1. Ensure images are in `public/` folder
2. Use correct relative paths: `/images/...`
3. Check image dimensions are valid

## Next Steps for Backend Integration

1. Create Express.js backend with API endpoints
2. Set up PostgreSQL/MongoDB database
3. Implement user authentication (JWT)
4. Create API routes for all endpoints (see BACKEND_INTEGRATION.md)
5. Add error handling and validation
6. Update frontend API calls to connect to backend
7. Implement file upload for prescriptions
8. Add real-time features (WebSockets for messages)

## Performance Optimization Tips

1. **Implement Image Optimization**
   - Use Next.js Image component
   - Add blur placeholder
   - Set explicit dimensions

2. **Code Splitting**
   - Already done by Next.js
   - Consider lazy loading heavy components

3. **API Caching**
   - Implement SWR or React Query
   - Cache appointments and patient data

4. **Database Indexing**
   - Index frequently queried fields
   - Use pagination for large datasets

## Security Checklist

- [ ] Implement HTTPS in production
- [ ] Add CSRF protection
- [ ] Validate all API inputs
- [ ] Hash passwords with bcrypt
- [ ] Use secure session cookies
- [ ] Implement rate limiting
- [ ] Add request validation
- [ ] Enable CORS only for trusted domains
- [ ] Sanitize user inputs
- [ ] Use environment variables for secrets

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## Support & Contribution

For issues or contributions:
1. Check existing issues
2. Create detailed bug reports
3. Follow code style guidelines
4. Test changes locally
5. Create pull requests with descriptions

## License

This project is provided as-is for educational and commercial use.

---

**Created**: February 2026
**Version**: 1.0.0
**Status**: Production-Ready Frontend

For detailed feature documentation, see [DOCTOR_DASHBOARD_README.md](./DOCTOR_DASHBOARD_README.md)
For backend integration guide, see [BACKEND_INTEGRATION.md](./BACKEND_INTEGRATION.md)
