import { useEffect, useRef, useState } from "react";

/* Ekranga kelganda 0 dan sanab chiqadigan raqam */
export default function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const k = Math.min((t - t0) / 1600, 1);
        setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return (
    <b ref={ref}>
      {n}
      {suffix}
    </b>
  );
}
