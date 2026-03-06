/**
 * Global singleton store — survives Next.js page navigation
 * because module-level variables persist as long as the JS bundle is loaded.
 */

export interface Msg {
  id: string;
  sender: 'doctor' | 'patient';
  text: string;
  timestamp: string;
}

interface State {
  messages: number;
  notifications: number;
  threads: Record<string, Msg[]>;
  readConvIds: Set<string>;
}

type Listener = (s: State) => void;

// ── Initial thread data ──────────────────────────────────────────
const INIT_THREADS: Record<string, Msg[]> = {
  '1': [
    { id: '1', sender: 'patient', text: "Hello Doctor, I'm having some concerns about the medication side effects.", timestamp: '10:15 AM' },
    { id: '2', sender: 'doctor',  text: 'Hello Sarah, which side effects are you experiencing? Please describe them in detail.', timestamp: '10:20 AM' },
    { id: '3', sender: 'patient', text: "I'm having some nausea and slight headaches. Started after I took the first dose.", timestamp: '10:25 AM' },
    { id: '4', sender: 'doctor',  text: 'These are common initial side effects. They usually subside within a few days. Try taking the medication with food.', timestamp: '10:28 AM' },
    { id: '5', sender: 'patient', text: 'Thank you for the prescription. How long should I take it?', timestamp: '10:32 AM' },
  ],
  '2': [
    { id: '1', sender: 'doctor',  text: 'Hi Michael, your lab results are back from the testing center.', timestamp: '2:45 PM' },
    { id: '2', sender: 'patient', text: 'Great! What are the results?', timestamp: '3:00 PM' },
    { id: '3', sender: 'doctor',  text: "Your blood work looks good overall. All values are within normal range. Let's schedule a follow-up.", timestamp: '3:05 PM' },
    { id: '4', sender: 'patient', text: 'Your test results are ready. Please schedule a follow-up.', timestamp: '3:10 PM' },
  ],
  '3': [
    { id: '1', sender: 'patient', text: "Doctor, I wanted to thank you for the treatment plan. I've been feeling much better.", timestamp: '9:30 AM' },
    { id: '2', sender: 'doctor',  text: "That's wonderful to hear, Emma! I'm glad the new medication is working well for you.", timestamp: '9:45 AM' },
    { id: '3', sender: 'patient', text: 'I feel much better after starting the new medication.', timestamp: '10:00 AM' },
    { id: '4', sender: 'doctor',  text: 'Continue with the current dosage and schedule another check-up in 4 weeks.', timestamp: '10:15 AM' },
  ],
};

// ── Singleton state ──────────────────────────────────────────────
let _state: State = {
  messages: 2,
  notifications: 4,
  threads: INIT_THREADS,
  readConvIds: new Set(),
};

const _listeners = new Set<Listener>();

function _emit() {
  // Defer to avoid "setState during render" React error
  setTimeout(() => {
    _listeners.forEach((l) => l(_state));
  }, 0);
}

// ── Public API ───────────────────────────────────────────────────
export const unreadStore = {
  /** Get a snapshot (safe to read outside React) */
  get: (): State => _state,

  /** Subscribe to all changes. Returns unsubscribe fn. */
  subscribe: (fn: Listener): (() => void) => {
    _listeners.add(fn);
    fn(_state); // fire immediately so caller gets current value
    return () => _listeners.delete(fn);
  },

  setNotifications: (n: number) => {
    _state = { ..._state, notifications: n };
    _emit();
  },

  /** Call when a conversation is opened — clears its badge */
  markConvRead: (convId: string, remainingUnread: number) => {
    const readConvIds = new Set(_state.readConvIds);
    readConvIds.add(convId);
    _state = { ..._state, readConvIds, messages: remainingUnread };
    _emit();
  },

  isConvRead: (convId: string): boolean => _state.readConvIds.has(convId),

  /** Append a message to a thread — persists across navigations */
  addMessage: (convId: string, msg: Msg) => {
    const prev = _state.threads[convId] ?? [];
    _state = {
      ..._state,
      threads: { ..._state.threads, [convId]: [...prev, msg] },
    };
    _emit();
  },

  getThread: (convId: string): Msg[] => _state.threads[convId] ?? [],
};
