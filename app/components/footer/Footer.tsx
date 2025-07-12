import styles from "./footer.module.css";
const { footer, copyright } = styles;

export const Footer = () => {
  return (
    <footer className={footer}>
      <p className={copyright}>©︎ 2025 Kasumi Takabayashi</p>
    </footer>
  );
};
