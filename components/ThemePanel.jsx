import { useState } from "react";
import { THEME } from "../theme";
import "./ThemePanel.css";

/* Saytning o'zida rang va rejimni o'zgartirish paneli */
export default function ThemePanel({ accent, setAccent, dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="tw">
      {open && (
        <div className="pn">
          <p>Asosiy rang</p>
          <div className="sw">
            {THEME.swatches.map((c) => (
              <button
                key={c}
                aria-label={c}
                className={c === accent ? "on" : ""}
                style={{ background: c }}
                onClick={() => setAccent(c)}
              />
            ))}
          </div>
          <p>Rejim</p>
          <div className="md">
            <button className={!dark ? "on" : ""} onClick={() => setDark(false)}>
              Yorug'
            </button>
            <button className={dark ? "on" : ""} onClick={() => setDark(true)}>
              Qorong'i
            </button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)}>{open ? "Yopish" : "Dizayn"}</button>
    </div>
  );
}
