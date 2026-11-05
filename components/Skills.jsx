import { D } from "../content";

/* Ixcham ko'nikmalar ro'yxati */
export default function Skills() {
  return D.skills.map(([title, list]) => (
    <div className="sk" key={title}>
      <h3>{title}</h3>
      <div className="tags">
        {list.map((s) => (
          <i key={s}>{s}</i>
        ))}
      </div>
    </div>
  ));
}
