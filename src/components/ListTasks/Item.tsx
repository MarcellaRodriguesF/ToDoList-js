import classNames from "classnames";
import { ITasks } from "../../Interfaces/ITasks";
import styles from "./Item.module.css";
import { Trash } from "@phosphor-icons/react";

interface ItemProps {
  tasks: ITasks[];
  handleCheckTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export default function Item({
  tasks,
  handleCheckTask,
  handleDeleteTask,
}: ItemProps) {
  return (
    <>
      <div className={styles.container}>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={styles.item}
            onClick={() => handleCheckTask(task.id)}
          >
            <input type="checkbox" />
            <span
              className={classNames({
                [styles["task-completed"]]: task.isCompleted,
                [styles["task-not-completed"]]: !task.isCompleted,
              })}
            >
              {task.title}
            </span>
            <Trash
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTask(task.id);
              }}
              className={styles["icon-trash"]}
              size={24}
            />
          </div>
        ))}
      </div>
    </>
  );
}
