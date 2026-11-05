import { useEffect, useRef, useState } from "react";

/* Scroll qilganda pastdan yumshoq chiqadigan o'ram */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setOn(true), io.disconnect()),
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`rv ${on ? "in" : ""} ${className}`} style={{ "--d": delay + "s" }}>
      {children}
    </div>
  );
}
