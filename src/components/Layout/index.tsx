import React from 'react';
import styles from './styles.css';
import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Trade } from "../pages/Trade";

export const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Logo />
                </div>

                <div className={styles.page}>
                    <div className={styles.menu}>
                        <Menu />
                    </div>
                    <div className={styles.routes}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/trade" element={<Trade />} />
                        </Routes>
                    </div>
                </div>

            </div>
        </div>
    );
}
