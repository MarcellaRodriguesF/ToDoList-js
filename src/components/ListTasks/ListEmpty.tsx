import styles from "./ListEmpty.module.css";
import prancheta from "../../assets/icon-prancheta.svg";

export function ListEmpty() {
  return (
    <>
      <div className={styles.container}>
        <img src={prancheta} alt="Logotipo" />
        <p>
          <strong>Você ainda não tem tarefas cadastrada</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </p>
      </div>
    </>
  );
}
