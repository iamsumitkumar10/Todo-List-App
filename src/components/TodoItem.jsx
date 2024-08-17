import React from "react";
import styles from "./todoitem.module.css";

export default function TodoItem({ item }) {
  function handleDelete() {
    console.log("delete TodoItem");
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        {item}

        <span>
          <button onClick={handleDelete} className={styles.deletebutton}>
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
