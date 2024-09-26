import React from "react";
import styles from "./ToggleButton.module.css";

function ToggleButton() {
  return (
    <div className={styles.toggleSwitch}>
      <input type="checkbox" id="toggle" className={styles.toggleInput} />
      <label htmlFor="toggle" className={styles.toggleLabel}>
        <span className={`${styles.toggleIcon} ${styles.moon}`}>&#9790;</span>
        <span className={`${styles.toggleIcon} ${styles.sun}`}>&#9728;</span>
      </label>
    </div>
  );
}

export default ToggleButton;
