import "./Intro.css";

/* Ochilish animatsiyasi: sakragan nuqta */
export default function Intro({ name, onSkip }) {
  return (
    <div className="intro" onClick={onSkip} role="presentation">
      <span className="ball" />
      <span className="il">{name}</span>
    </div>
  );
}
