'use client';
import { useState, useEffect } from 'react';
import { langStore, t, type Lang, type TKey } from '@/lib/lang-store';

export function useLang() {
  const [lang, setLang] = useState<Lang>(langStore.get());

  useEffect(() => {
    return langStore.subscribe(setLang);
  }, []);

  return {
    lang,
    setLang: (l: Lang) => langStore.set(l),
    t: (key: TKey) => t(lang, key),
  };
}
