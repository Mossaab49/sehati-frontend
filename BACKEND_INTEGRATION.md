# Backend Integration Guide for Sehati Doctor Dashboard

This document outlines how to integrate the frontend Doctor Dashboard with an Express.js backend API.

## Overview

The frontend currently uses mock data stored in React state. To connect to a real backend, replace the `MOCK_` data arrays with API calls and update the state management to handle real data from the server.

## Required API Endpoints

### 1. Authentication & Doctor Info
```
GET /api/doctor/profile
Returns: Doctor profile information including name, specialty, CIN, email, phone

PUT /api/doctor/profile
Body: Updated doctor profile data
Returns: Updated doctor profile
```

### 2. Appointments
```
GET /api/appointments
Query params: 
  - date (optional): ISO date string (YYYY-MM-DD)
  - status (optional): 'waiting', 'completed', 'absent'
Returns: Array of appointments

GET /api/appointments/:appointmentId
Returns: Single appointment with full details

PUT /api/appointments/:appointmentId
Body: { status: 'completed' | 'absent' | 'waiting' }
Returns: Updated appointment

GET /api/appointments/:appointmentId/patient
Returns: Full patient profile including medical history
```

### 3. Prescriptions
```
GET /api/prescriptions
Query params:
  - appointmentId (optional)
Returns: List of prescriptions

POST /api/prescriptions
Body: {
  appointmentId: string,
  medications: Array<{
    name: string,
    dosage: string,
    instructions: string,
    duration: string
  }>,
  notes: string,
  signature: string (digital signature)
}
Returns: Created prescription with ID

GET /api/prescriptions/:prescriptionId
Returns: Single prescription

PUT /api/prescriptions/:prescriptionId/send
Body: { patientId: string }
Returns: Confirmation of sent prescription
```

### 4. Messages
```
GET /api/conversations
Query params:
  - search (optional): search term for patient name
Returns: Array of conversations

GET /api/conversations/:conversationId/messages
Query params:
  - limit: number (default: 50)
  - offset: number (default: 0)
Returns: Array of messages with pagination

POST /api/conversations/:conversationId/messages
Body: {
  text: string,
  timestamp: ISO datetime
}
Returns: Created message

GET /api/conversations/:conversationId
Returns: Conversation details
```

### 5. Notifications
```
GET /api/notifications
Query params:
  - type (optional): 'appointment', 'message', 'alert', 'report', 'medication'
  - unreadOnly (optional): boolean
Returns: Array of notifications

PUT /api/notifications/:notificationId/read
Returns: Updated notification

DELETE /api/notifications/:notificationId
Returns: Success status

PUT /api/notifications/mark-all-read
Returns: Count of marked notifications
```

### 6. Settings & Preferences
```
GET /api/doctor/settings
Returns: Doctor settings and preferences

PUT /api/doctor/settings
Body: {
  theme: 'light' | 'dark' | 'system',
  language: string,
  notifications: { [key: string]: boolean },
  privacy: { [key: string]: boolean }
}
Returns: Updated settings

PUT /api/doctor/password
Body: {
  currentPassword: string,
  newPassword: string
}
Returns: Success status

GET /api/doctor/work-schedule
Returns: Work schedule information

PUT /api/doctor/work-schedule
Body: {
  [day: string]: { enabled: boolean, start: string, end: string }
}
Returns: Updated schedule
```

## Implementation Steps

### Step 1: Set Up API Service Layer

Create a file `lib/api.ts`:

```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const api = {
  // Appointments
  async getAppointments(date?: string) {
    const url = new URL(`${API_BASE_URL}/appointments`);
    if (date) url.searchParams.append('date', date);
    const res = await fetch(url.toString());
    return res.json();
  },

  async updateAppointmentStatus(appointmentId: string, status: string) {
    const res = await fetch(`${API_BASE_URL}/appointments/${appointmentId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    return res.json();
  },

  // Conversations
  async getConversations(search?: string) {
    const url = new URL(`${API_BASE_URL}/conversations`);
    if (search) url.searchParams.append('search', search);
    const res = await fetch(url.toString());
    return res.json();
  },

  async sendMessage(conversationId: string, text: string) {
    const res = await fetch(`${API_BASE_URL}/conversations/${conversationId}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, timestamp: new Date().toISOString() }),
    });
    return res.json();
  },

  // Notifications
  async getNotifications(type?: string) {
    const url = new URL(`${API_BASE_URL}/notifications`);
    if (type) url.searchParams.append('type', type);
    const res = await fetch(url.toString());
    return res.json();
  },

  async markNotificationRead(notificationId: string) {
    const res = await fetch(`${API_BASE_URL}/notifications/${notificationId}/read`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  },
};
```

### Step 2: Update Dashboard Page

Replace mock data in `app/dashboard/page.tsx`:

```typescript
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

export default function DashboardPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const data = await api.getAppointments();
        setAppointments(data);
      } catch (error) {
        console.error('Failed to load appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAppointments();
  }, []);

  // ... rest of component
}
```

### Step 3: Update Messages Page

```typescript
useEffect(() => {
  const loadConversations = async () => {
    const data = await api.getConversations();
    setConversations(data);
  };

  loadConversations();
}, []);

const handleSendMessage = async () => {
  if (messageInput.trim() && selectedConversation) {
    await api.sendMessage(selectedConversation.id, messageInput);
    setMessageInput('');
    // Reload messages
  }
};
```

### Step 4: Update Notifications Page

```typescript
useEffect(() => {
  const loadNotifications = async () => {
    const data = await api.getNotifications(filter !== 'all' ? filter : undefined);
    setNotifications(data);
  };

  loadNotifications();
}, [filter]);

const handleMarkAsRead = async (id: string) => {
  await api.markNotificationRead(id);
  // Update local state
};
```

### Step 5: Add Authentication

Implement JWT token handling:

```typescript
// lib/auth.ts
export const getAuthHeaders = () => {
  const token = typeof window !== 'undefined' 
    ? localStorage.getItem('auth_token') 
    : null;
  
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};
```

Update API calls to include auth headers:

```typescript
const res = await fetch(url, {
  headers: getAuthHeaders(),
});
```

## Environment Variables

Add to `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## Error Handling

Implement error boundaries and loading states:

```typescript
import { useState, useEffect } from 'react';

export function useApi<T>(fn: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fn()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [fn]);

  return { data, error, loading };
}
```

## Testing API Endpoints

Use Thunder Client or Postman to test endpoints before full integration:

```
GET http://localhost:3001/api/appointments
Authorization: Bearer <token>
```

## Database Schema Considerations

Ensure your backend has tables/collections for:
- doctors (profile, credentials, work schedule)
- appointments (with patient references and status)
- patients (full medical history)
- conversations (doctor-patient chats)
- messages (conversation messages)
- notifications (system alerts)
- prescriptions (with medications list)

## CORS Configuration

Add CORS headers in Express:

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
```

## Rate Limiting

Implement rate limiting for API endpoints to prevent abuse:

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use('/api/', limiter);
```

## Next Steps

1. Set up Express backend with above endpoints
2. Implement database models and migrations
3. Add authentication and authorization
4. Test endpoints with Postman/Thunder Client
5. Integrate with frontend using the steps above
6. Add error handling and validation
7. Implement caching strategies for performance
8. Add logging and monitoring
