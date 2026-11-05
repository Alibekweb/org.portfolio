/* So'zni harflarga bo'ladi, har biri ketma-ket ko'tariladi */
export default function SplitWord({ text, offset = 0 }) {
  return text.split("").map((c, i) => (
    <span key={i} className="ch" style={{ "--i": i + offset }}>
      {c}
    </span>
  ));
}
