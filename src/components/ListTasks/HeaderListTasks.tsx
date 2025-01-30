import styles from "./HeaderListTasks.module.css";

interface HeaderListTasksProps {
  tasksCounter: number;
  checkedTasksCounter: number;
}

export function HeaderListTasks({
  tasksCounter,
  checkedTasksCounter,
}: HeaderListTasksProps) {
  return (
    <>
      <header className={styles.container}>
        <aside>
          <p>Tarefas criadas</p>
          <span>{tasksCounter}</span>
        </aside>

        <aside>
          <p> Concluídas</p>
          <span>
            {checkedTasksCounter === 0
              ? 0
              : `${checkedTasksCounter} de ${tasksCounter}`}
          </span>
        </aside>
      </header>
    </>
  );
}
