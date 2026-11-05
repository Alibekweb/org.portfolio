import SplitWord from "./SplitWord";
import { D } from "../content";
import "./Hero.css";

export default function Hero() {
  return (
    <header id="bosh" className="wrap hero">
      <h1 aria-label={`${D.first} ${D.last}`}>
        <span className="ln">
          <SplitWord text={D.first} />
          <i className="pt" />
        </span>
        <span className="ln l2">
          <SplitWord text={D.last} offset={3} />
        </span>
      </h1>

      <div className="meta">
        <p>{D.intro}</p>
        <div>
          <strong>{D.role}</strong>
          <div className="avail">
            <span className="dot" />
            {D.status}
          </div>
        </div>
      </div>

      <div className="scroll">
        <b />
        Pastga suring
      </div>
    </header>
  );
}
