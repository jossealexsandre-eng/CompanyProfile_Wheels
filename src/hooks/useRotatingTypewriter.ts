import { useState, useEffect, useRef } from 'react';

interface UseRotatingTypewriterOptions {
  /** Daftar kalimat yang akan bergantian */
  phrases: string[];
  /** Kecepatan mengetik per karakter (ms) */
  typeSpeed?: number;
  /** Kecepatan menghapus per karakter (ms) */
  deleteSpeed?: number;
  /** Jeda setelah kalimat selesai diketik sebelum dihapus (ms) */
  pauseAfterType?: number;
  /** Jeda setelah semua karakter terhapus sebelum ketik berikutnya (ms) */
  pauseAfterDelete?: number;
  /** Delay awal sebelum mulai (ms) */
  startDelay?: number;
}

type Phase = 'idle' | 'typing' | 'pausing' | 'deleting' | 'gap';

interface UseRotatingTypewriterReturn {
  displayed: string;
  phase: Phase;
  phraseIndex: number;
}

/**
 * Hook rotating typewriter — mengetik, menjeda, menghapus, dan berganti kalimat
 * secara loop tak terbatas dari array `phrases`.
 */
export function useRotatingTypewriter({
  phrases,
  typeSpeed = 55,
  deleteSpeed = 28,
  pauseAfterType = 2200,
  pauseAfterDelete = 420,
  startDelay = 1000,
}: UseRotatingTypewriterOptions): UseRotatingTypewriterReturn {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<Phase>('idle');
  const [phraseIndex, setPhraseIndex] = useState(0);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const charRef = useRef(0);
  const phaseRef = useRef<Phase>('idle');
  const phraseIdxRef = useRef(0);

  const clear = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  useEffect(() => {
    if (!phrases.length) return;

    const go = (nextPhase: Phase, nextIdx: number, nextChar: number) => {
      phaseRef.current = nextPhase;
      phraseIdxRef.current = nextIdx;
      charRef.current = nextChar;
      setPhase(nextPhase);
      setPhraseIndex(nextIdx);
    };

    const tick = () => {
      const currentPhrase = phrases[phraseIdxRef.current];

      if (phaseRef.current === 'idle') {
        // Start typing first phrase
        go('typing', phraseIdxRef.current, 0);
        timerRef.current = setTimeout(tick, 0);

      } else if (phaseRef.current === 'typing') {
        if (charRef.current < currentPhrase.length) {
          charRef.current += 1;
          setDisplayed(currentPhrase.slice(0, charRef.current));
          timerRef.current = setTimeout(tick, typeSpeed);
        } else {
          // Done typing → pause
          go('pausing', phraseIdxRef.current, charRef.current);
          timerRef.current = setTimeout(tick, pauseAfterType);
        }

      } else if (phaseRef.current === 'pausing') {
        // Start deleting
        go('deleting', phraseIdxRef.current, charRef.current);
        timerRef.current = setTimeout(tick, 0);

      } else if (phaseRef.current === 'deleting') {
        if (charRef.current > 0) {
          charRef.current -= 1;
          setDisplayed(currentPhrase.slice(0, charRef.current));
          timerRef.current = setTimeout(tick, deleteSpeed);
        } else {
          // Done deleting → gap then next phrase
          go('gap', phraseIdxRef.current, 0);
          timerRef.current = setTimeout(tick, pauseAfterDelete);
        }

      } else if (phaseRef.current === 'gap') {
        // Move to next phrase
        const nextIdx = (phraseIdxRef.current + 1) % phrases.length;
        go('typing', nextIdx, 0);
        setDisplayed('');
        timerRef.current = setTimeout(tick, 0);
      }
    };

    // Initial delay
    go('idle', 0, 0);
    setDisplayed('');
    timerRef.current = setTimeout(() => {
      go('typing', 0, 0);
      timerRef.current = setTimeout(tick, 0);
    }, startDelay);

    return () => clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases.join('||'), typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete, startDelay]);

  return { displayed, phase, phraseIndex };
}
