import React from 'react';
import styles from './styles.css';
import { Logo } from '../Logo'
import { Menu } from '../Menu'

export const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Logo />
                </div>
                <div className={styles.menu}>
                    <Menu />
                </div>
            </div>
        </div>
    );
}
