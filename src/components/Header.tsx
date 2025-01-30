import styles from "./Header.module.css";
import toDoListLogo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoListLogo} alt="Logotipo" />
    </header>
  );
}
