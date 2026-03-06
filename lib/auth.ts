// Simple auth helper — uses sessionStorage (demo only)

export interface SehatiUser {
  role: 'doctor' | 'patient';
  name: string;
  email: string;
}

export function getUser(): SehatiUser | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem('sehati_user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function logout() {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('sehati_user');
  }
}
