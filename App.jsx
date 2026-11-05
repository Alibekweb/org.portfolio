import { useRef, useState } from "react";
import { THEME, fontsCss } from "./theme";
import { D } from "./content";
import useIntro from "./useIntro";
import useScrollProgress from "./useScrollProgress";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import ThemePanel from "./components/ThemePanel";

import "./base.css";

export default function App() {
  const root = useRef(null);
  const { intro, go, skip } = useIntro();
  const [accent, setAccent] = useState(THEME.accent);
  const [dark, setDark] = useState(THEME.dark);

  useScrollProgress(root);

  const cls = "pf" + (dark ? " dk" : "") + (go ? " go" : "");
  const vars = {
    "--ac": accent,
    "--fd": `'${THEME.display}'`,
    "--fb": `'${THEME.body}'`,
    "--r": THEME.radius + "px",
  };

  return (
    <div ref={root} className={cls} style={vars}>
      <style>{fontsCss}</style>

      {intro && <Intro name={`${D.first} ${D.last}`} onSkip={skip} />}

      <Navbar name={D.first} />
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Contact />

      <ThemePanel accent={accent} setAccent={setAccent} dark={dark} setDark={setDark} />
    </div>
  );
}
