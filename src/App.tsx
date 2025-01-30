import Header from "./components/Header";
import Input from "./components/Input";
import { ListEmpty } from "./components/ListTasks/ListEmpty";
import styles from "./App.module.css";
import "./global.css";
import { HeaderListTasks } from "./components/ListTasks/HeaderListTasks";
import { useState } from "react";
import { ITasks } from "./Interfaces/ITasks";
import { v4 as uuidv4 } from "uuid";
import Item from "./components/ListTasks/Item";

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [inputValue, setInputValue] = useState("");

  const countTasks = tasks.length;
  const countCheckedTasks = tasks.filter((task) => task.isCompleted).length;

  function handleCreateTask() {
    if (!inputValue.trim()) {
      alert("Por favor, insira uma tarefa válida.");
      return;
    }

    const newTask: ITasks = {
      id: uuidv4(),
      title: inputValue,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  }

  function handleToggleTask(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <>
      <main>
        <Header />
        <section className={styles.content}>
          <Input
            handleCreateTask={handleCreateTask}
            setInputValue={setInputValue}
            inputValue={inputValue}
          />
          <HeaderListTasks
            tasksCounter={countTasks}
            checkedTasksCounter={countCheckedTasks}
          />
          {tasks.length === 0 ? (
            <ListEmpty />
          ) : (
            <Item
              tasks={tasks}
              handleCheckTask={handleToggleTask}
              handleDeleteTask={handleDeleteTask}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
