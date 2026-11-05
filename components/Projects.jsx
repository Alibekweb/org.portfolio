import { useState } from "react";
import Reveal from "./Reveal";
import ProjectStage from "./ProjectStage";
import { D } from "../content";
import "./Projects.css";

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="loyihalar">
      <div className="wrap">
        <Reveal>
          <div className="sh">
            <h2>Loyihalar</h2>
            <span>{D.projects.length} ta tanlangan ish</span>
          </div>
        </Reveal>

        <Reveal className="work">
          <div role="list">
            {D.projects.map((x, i) => (
              <button
                key={x.t}
                role="listitem"
                className={"row" + (i === active ? " on" : "")}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <h3>{x.t}</h3>
                <em>{x.y}</em>
                <small>{x.k}</small>
              </button>
            ))}
          </div>
          <ProjectStage project={D.projects[active]} />
        </Reveal>
      </div>
    </section>
  );
}
