import { useState } from "react";

import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
        <input
          className={styles.mordernInput}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Enter Todo Name: "
        />

        <button className={styles.mordenButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
