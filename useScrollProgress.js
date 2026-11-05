import { useEffect } from "react";

/* Sahifa tepasidagi o'qish chizig'i uchun --p o'zgaruvchisini yangilaydi */
export default function useScrollProgress(ref) {
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      ref.current?.style.setProperty("--p", (h.scrollTop / max) * 100 + "%");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
}
