/* Tanlangan loyihaning o'ng tomondagi vizual kartasi */
export default function ProjectStage({ project: p }) {
  return (
    <div className="stage" style={{ background: p.c2 }} aria-hidden="true">
      <i className="sp" style={{ width: "62%", aspectRatio: "1", borderRadius: "50%", background: p.c1, top: "8%", left: "-8%" }} />
      <i className="sp" style={{ width: "46%", height: "34%", borderRadius: 24, background: "#fff", opacity: 0.9, top: "18%", right: "8%" }} />
      <i className="sp" style={{ width: "30%", height: "30%", borderRadius: "50% 0 50% 0", background: p.c1, top: "40%", right: "20%" }} />
      <div className="cap">
        <p>{p.d}</p>
        <div className="tags">
          {p.s.map((s) => (
            <i key={s}>{s}</i>
          ))}
        </div>
        <a href={p.link}>Loyihani ochish ↗</a>
      </div>
    </div>
  );
}
