import Link from "next/link";
import styles from "./header.module.css";
const { header } = styles;

export const Header = () => {
  return (
    <header className={header}>
      <h1>
        <Link href="/">
          kasumi takabayashi
          <span>frontend engineer + web creator</span>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href={'/profile'}>profile</Link>
          </li>
          <li>
            <a href="mailto:parfumdelapeche@gmail.com">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
