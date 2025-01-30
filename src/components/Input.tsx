import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Input.module.css";

interface InputProps {
  handleCreateTask: (value: string) => void;
  inputValue: string;
  setInputValue: (value: string) => void;

}

export default function Input({
  handleCreateTask,
  inputValue,
  setInputValue,
}: InputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o envio do formulário
    handleCreateTask(inputValue);
  };

  return (
    <>
      <form
        className={styles.container}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          name="task-name"
          required={true}
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit" >
          Criar <PlusCircle size={18} />
        </button>
      </form>
    </>
  );
}
