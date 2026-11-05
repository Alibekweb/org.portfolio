import { useEffect, useState } from "react";

/* Ochilish animatsiyasi holati: intro (ko'rinib turibdi), go (sahifa animatsiyalari boshlansin) */
export default function useIntro() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [intro, setIntro] = useState(!reduced);
  const [go, setGo] = useState(reduced);

  useEffect(() => {
    if (!intro) return;
    const a = setTimeout(() => setGo(true), 2750);
    const b = setTimeout(() => setIntro(false), 3500);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [intro]);

  const skip = () => {
    setGo(true);
    setIntro(false);
  };

  return { intro, go, skip };
}
