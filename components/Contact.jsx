import Reveal from "./Reveal";
import { D } from "../content";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="aloqa" className="ct">
      <div className="wrap">
        <Reveal>
          <h2>Birgalikda biror narsa yarataylik.</h2>
          <a className="mail" href={`mailto:${D.email}`}>
            {D.email}
          </a>
          <div className="links">
            {D.links.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
            <span style={{ marginLeft: "auto" }}>
              © 2026 {D.first} {D.last}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
