'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { unreadStore, type Msg } from '@/lib/unread-store';

interface Conv {
  id: string;
  name: string;
  avatar: string;
  initials: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

const BASE_CONVS: Conv[] = [
  { id: '1', name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=1', initials: 'SJ', lastMessage: 'Thank you for the prescription. How long should I take it?', timestamp: '10:32 AM', unread: 2 },
  { id: '2', name: 'Michael Chen',  avatar: 'https://i.pravatar.cc/150?img=2', initials: 'MC', lastMessage: 'Your test results are ready. Please schedule a follow-up.',    timestamp: 'Yesterday', unread: 0 },
  { id: '3', name: 'Emma Davis',    avatar: 'https://i.pravatar.cc/150?img=3', initials: 'ED', lastMessage: 'I feel much better after starting the new medication.',          timestamp: 'Last week', unread: 0 },
];

/** Get the actual last message text+time from the store thread */
function getLastMsg(convId: string): { lastMessage: string; timestamp: string } {
  const thread = unreadStore.getThread(convId);
  if (thread.length === 0) return { lastMessage: '', timestamp: '' };
  const last = thread[thread.length - 1];
  const prefix = last.sender === 'doctor' ? 'You: ' : '';
  return { lastMessage: prefix + last.text, timestamp: last.timestamp };
}

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function MessagesPage() {
  // Apply already-read state + actual last message from store on mount
  const [convs, setConvs] = useState<Conv[]>(() =>
    BASE_CONVS.map((c) => {
      const { lastMessage, timestamp } = getLastMsg(c.id);
      return {
        ...c,
        lastMessage: lastMessage || c.lastMessage,
        timestamp:   timestamp   || c.timestamp,
        unread: unreadStore.isConvRead(c.id) ? 0 : c.unread,
      };
    })
  );
  const [selectedId, setSelectedId] = useState('1');
  const [search, setSearch]         = useState('');
  const [input, setInput]           = useState('');

  // threads come from the global store — survive navigation
  const [threads, setThreads] = useState<Record<string, Msg[]>>(() => ({
    '1': unreadStore.getThread('1'),
    '2': unreadStore.getThread('2'),
    '3': unreadStore.getThread('3'),
  }));

  const bottomRef = useRef<HTMLDivElement>(null);

  // Keep threads in sync with store + update conv last-message previews
  useEffect(() => {
    const unsub = unreadStore.subscribe((s) => {
      setThreads({ '1': s.threads['1'] ?? [], '2': s.threads['2'] ?? [], '3': s.threads['3'] ?? [] });
      // Refresh lastMessage preview for each conv from the store thread
      setConvs((prev) =>
        prev.map((conv) => {
          const thread = s.threads[conv.id];
          if (!thread || thread.length === 0) return conv;
          const last = thread[thread.length - 1];
          const prefix = last.sender === 'doctor' ? 'You: ' : '';
          return { ...conv, lastMessage: prefix + last.text, timestamp: last.timestamp };
        })
      );
    });
    return unsub;
  }, []);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [threads[selectedId]?.length, selectedId]);

  // Mark as read when conversation opens
  useEffect(() => {
    setConvs((prev) => {
      const updated = prev.map((c) => c.id === selectedId ? { ...c, unread: 0 } : c);
      const remaining = updated.reduce((s, c) => s + c.unread, 0);
      unreadStore.markConvRead(selectedId, remaining);
      return updated;
    });
  }, [selectedId]);

  const send = () => {
    if (!input.trim()) return;
    const msg: Msg = {
      id:        Date.now().toString(),
      sender:    'doctor',
      text:      input.trim(),
      timestamp: nowTime(),
    };
    // Write to store — persists across navigation
    unreadStore.addMessage(selectedId, msg);
    setConvs((prev) =>
      prev.map((c) => c.id === selectedId ? { ...c, lastMessage: 'You: ' + input.trim(), timestamp: nowTime() } : c)
    );
    setInput('');
  };

  const [showChat, setShowChat] = useState(false);

  const filtered     = convs.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
  const selectedConv = convs.find((c) => c.id === selectedId)!;
  const messages     = threads[selectedId] ?? [];

  const handleSelectConv = (id: string) => {
    setSelectedId(id);
    setShowChat(true);
  };

  return (
    <div className="flex h-full bg-background overflow-hidden">

      {/* ── Conversation list ── */}
      <div className={cn(
        'border-r border-border flex flex-col bg-card shrink-0',
        'w-full md:w-80',
        showChat ? 'hidden md:flex' : 'flex'
      )}>
        <div className="p-4 md:p-6 border-b border-border space-y-3">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">Messages</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Communicate securely with your patients.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              className="pl-10 bg-background border-border"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {filtered.map((conv) => (
            <button
              key={conv.id}
              onClick={() => handleSelectConv(conv.id)}
              className={cn(
                'w-full flex items-start gap-3 p-3 rounded-lg transition-colors text-left',
                selectedId === conv.id && !showChat ? 'bg-primary/10 border border-primary/40' : 'hover:bg-background border border-transparent',
                selectedId === conv.id && showChat ? 'bg-primary/10 border border-primary/40' : ''
              )}
            >
              <div className="relative mt-0.5 shrink-0">
                <Avatar>
                  <AvatarImage src={conv.avatar} alt={conv.name} />
                  <AvatarFallback className="bg-muted text-xs font-semibold">{conv.initials}</AvatarFallback>
                </Avatar>
                {conv.unread > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary border-2 border-card" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className={cn('text-sm truncate', conv.unread > 0 ? 'font-bold' : 'font-medium', 'text-foreground')}>
                    {conv.name}
                  </h3>
                  {conv.unread > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">
                      {conv.unread}
                    </span>
                  )}
                </div>
                <p className={cn('text-xs truncate', conv.unread > 0 ? 'text-foreground/80 font-medium' : 'text-muted-foreground')}>
                  {conv.lastMessage}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{conv.timestamp}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Chat area ── */}
      <div className={cn('flex-1 flex flex-col min-w-0', showChat ? 'flex' : 'hidden md:flex')}>
        <div className="p-4 border-b border-border bg-card flex items-center gap-3">
          {/* Back button mobile */}
          <button
            onClick={() => setShowChat(false)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-secondary transition-colors text-muted-foreground shrink-0"
            aria-label="Back to conversations"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <Avatar className="shrink-0">
            <AvatarImage src={selectedConv.avatar} alt={selectedConv.name} />
            <AvatarFallback className="bg-muted font-semibold">{selectedConv.initials}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-foreground">{selectedConv.name}</h2>
            <p className="text-xs text-muted-foreground">Active now</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={cn('flex', msg.sender === 'doctor' ? 'justify-end' : 'justify-start')}>
              <div className={cn(
                'max-w-[75%] md:max-w-md px-4 py-2.5 rounded-2xl',
                msg.sender === 'doctor'
                  ? 'bg-primary text-primary-foreground rounded-br-sm'
                  : 'bg-card border border-border text-foreground rounded-bl-sm'
              )}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p className={cn('text-xs mt-1', msg.sender === 'doctor' ? 'opacity-70 text-right' : 'text-muted-foreground')}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="p-3 md:p-4 border-t border-border bg-card">
          <div className="flex gap-3">
            <Textarea
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
              className="bg-background border-border resize-none text-sm"
              rows={2}
            />
            <Button
              onClick={send}
              disabled={!input.trim()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground self-end"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Enter to send · Shift+Enter for new line</p>
        </div>
      </div>
    </div>
  );
}
