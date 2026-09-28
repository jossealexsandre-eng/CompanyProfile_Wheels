import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
  /** teks yang akan diketik */
  text: string;
  /** delay (ms) sebelum mulai mengetik */
  startDelay?: number;
  /** kecepatan per karakter (ms) */
  speed?: number;
  /** apakah langsung mulai saat mount */
  autoStart?: boolean;
}

interface UseTypewriterReturn {
  displayed: string;
  isDone: boolean;
  isStarted: boolean;
}

/**
 * Hook typewriter — mengetik text karakter demi karakter.
 * Mengembalikan `displayed` (teks saat ini), `isDone`, dan `isStarted`.
 */
export function useTypewriter({
  text,
  startDelay = 0,
  speed = 35,
  autoStart = true,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayed, setDisplayed] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const indexRef = useRef(0);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Reset jika teks berubah (misal: ganti bahasa)
    setDisplayed('');
    setIsDone(false);
    setIsStarted(false);
    indexRef.current = 0;

    if (!autoStart) return;

    const delayTimer = setTimeout(() => {
      setIsStarted(true);

      const type = () => {
        if (indexRef.current < text.length) {
          indexRef.current += 1;
          setDisplayed(text.slice(0, indexRef.current));
          rafRef.current = setTimeout(type, speed);
        } else {
          setIsDone(true);
        }
      };

      rafRef.current = setTimeout(type, 0);
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [text, startDelay, speed, autoStart]);

  return { displayed, isDone, isStarted };
}
