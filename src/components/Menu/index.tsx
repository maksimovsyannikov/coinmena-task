import React from "react";
import styles from "./styles.css";

export const Menu = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>main menu</span>
            <ul className={styles.list}>
                <li className={styles.item}>Home</li>
                <li className={styles.item}>Trade</li>
            </ul>
        </div>
    )
}
