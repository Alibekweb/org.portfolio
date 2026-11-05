import Reveal from "./Reveal";
import Counter from "./Counter";
import Skills from "./Skills";
import { D } from "../content";
import "./About.css";

export default function About() {
  return (
    <section id="haqimda">
      <div className="wrap">
        <Reveal>
          <div className="sh">
            <h2>Men haqimda</h2>
          </div>
        </Reveal>

        <div className="about">
          <Reveal>
            {D.about.map((t) => (
              <p key={t}>{t}</p>
            ))}
            <div className="stats">
              {D.stats.map(([n, label, suffix]) => (
                <div className="stat" key={label}>
                  <Counter to={n} suffix={suffix} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Skills />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
