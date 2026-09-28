import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { CheckCircle, AlertCircle, Info, X, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type ToastType = "success" | "error" | "info" | "coffee";

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextValue {
  showToast: (t: Omit<Toast, "id">) => void;
  success: (title: string, message?: string) => void;
  error: (title: string, message?: string) => void;
  info: (title: string, message?: string) => void;
  coffee: (title: string, message?: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be inside ToastProvider");
  return ctx;
};

const ICONS: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle className="w-4 h-4 text-emerald-400" />,
  error: <AlertCircle className="w-4 h-4 text-rose-400" />,
  info: <Info className="w-4 h-4 text-sky-400" />,
  coffee: <Coffee className="w-4 h-4 text-amber-400" />
};

const ACCENTS: Record<ToastType, string> = {
  success: "border-emerald-500/40 bg-emerald-950/20",
  error: "border-rose-500/40 bg-rose-950/20",
  info: "border-sky-500/40 bg-sky-950/20",
  coffee: "border-amber-400/40 bg-amber-950/20"
};

const BAR: Record<ToastType, string> = {
  success: "bg-emerald-400",
  error: "bg-rose-400",
  info: "bg-sky-400",
  coffee: "bg-amber-400"
};

const SingleToast: React.FC<{ toast: Toast; onClose: (id: string) => void }> = ({ toast, onClose }) => {
  const dur = toast.duration ?? 4200;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 50, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      className={"relative flex items-start gap-3 w-84 max-w-[calc(100vw-2rem)] p-4 rounded-2xl overflow-hidden bg-[#18120d]/95 backdrop-blur-xl border " + ACCENTS[toast.type] + " shadow-[0_12px_40px_rgba(0,0,0,0.6)] pointer-events-auto"}
    >
      <motion.div
        className={"absolute bottom-0 left-0 h-[2.5px] origin-left rounded-full " + BAR[toast.type]}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: dur / 1000, ease: "linear" }}
        onAnimationComplete={() => onClose(toast.id)}
      />
      <div className="mt-0.5 shrink-0">{ICONS[toast.type]}</div>
      <div className="flex-1 min-w-0 pr-1">
        <p className="text-xs font-semibold text-[#f7f2ea] tracking-wide">{toast.title}</p>
        {toast.message && (
          <p className="text-[11px] text-[#c4b8aa] mt-0.5 leading-relaxed">{toast.message}</p>
        )}
      </div>
      <button
        onClick={() => onClose(toast.id)}
        className="shrink-0 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Close"
      >
        <X className="w-3 h-3 text-[#c4b8aa]" />
      </button>
    </motion.div>
  );
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const counter = useRef(0);

  const remove = useCallback((id: string) => {
    setToasts((p) => p.filter((t) => t.id !== id));
  }, []);

  const show = useCallback((toast: Omit<Toast, "id">) => {
    const id = "toast-" + (++counter.current);
    setToasts((p) => [...p.slice(-4), { ...toast, id }]);
  }, []);

  const success = useCallback((title: string, msg?: string) => show({ type: "success", title, message: msg }), [show]);
  const error = useCallback((title: string, msg?: string) => show({ type: "error", title, message: msg }), [show]);
  const info = useCallback((title: string, msg?: string) => show({ type: "info", title, message: msg }), [show]);
  const coffee = useCallback((title: string, msg?: string) => show({ type: "coffee", title, message: msg }), [show]);

  return (
    <ToastContext.Provider value={{ showToast: show, success, error, info, coffee }}>
      {children}
      <div aria-live="polite" className="fixed bottom-24 right-4 sm:right-6 z-[9999] flex flex-col gap-2.5 pointer-events-none">
        <AnimatePresence mode="sync">
          {toasts.map((t) => (
            <SingleToast key={t.id} toast={t} onClose={remove} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
