/* DIZAYNNI SHU YERDA O'ZGARTIRING */
export const THEME = {
  accent: "#5A74FF", // asosiy rang
  swatches: ["#5A74FF", "#FF6B3D", "#18B88F", "#9B6BFF", "#FF4D97", "#F5B82E"],
  dark: true, // true = qora fonda ochiladi, false = yorug'
  display: "Bricolage Grotesque", // sarlavha shrifti (Google Fonts nomi)
  body: "Instrument Sans", // matn shrifti
  radius: 28, // kartalar yumaloqligi (px)
};

const plus = (name) => name.replace(/ /g, "+");

export const fontsCss = `@import url('https://fonts.googleapis.com/css2?family=${plus(
  THEME.display
)}:wght@400;600;800&family=${plus(THEME.body)}:wght@400;500&display=swap');`;
