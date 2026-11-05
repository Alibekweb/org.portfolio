import Reveal from "./Reveal";
import { D } from "../content";
import "./Journey.css";

export default function Journey() {
  return (
    <section id="yol">
      <div className="wrap">
        <Reveal>
          <div className="sh">
            <h2>Yo'lim</h2>
          </div>
        </Reveal>
        <Reveal>
          <ul className="tl">
            {D.path.map((c) => (
              <li key={c.w}>
                <b>{c.t}</b>
                <span>
                  {c.p} · {c.w}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
