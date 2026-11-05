import "./Navbar.css";

const LINKS = [
  ["haqimda", "Haqimda"],
  ["loyihalar", "Loyihalar"],
  ["yol", "Yo'lim"],
  ["aloqa", "Aloqa"],
];

export default function Navbar({ name }) {
  return (
    <>
      <div className="bar" />
      <nav>
        <div className="wrap">
          <a className="logo" href="#bosh">
            {name}
            <i />
          </a>
          <ul>
            {LINKS.map(([id, label]) => (
              <li key={id}>
                <a href={"#" + id}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
