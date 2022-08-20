import React from 'react';
import styles from './styles.css';
import { Logo } from '../Header/Logo';
import { Menu } from '../Menu';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home } from '../pages/Home';
import { Trade } from '../pages/Trade';
import { AuthButton } from '../Header/AuthButton';
import { uiSelectors } from '../../redux/selectors';
import { AuthPopup } from '../AuthPopup';
import { UserInfo } from '../Header/UserInfo';

export const Layout: React.FC = () => {
    const authPopupVisible = useSelector(uiSelectors.authPopupVisible);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.logo}>
                            <Logo />
                        </div>
                        <div className={styles.topBar}>
                            <div className={styles.userInfo}>
                                <UserInfo />
                            </div>
                            <div className={styles.authButton}>
                                <AuthButton />
                            </div>
                        </div>
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
            {authPopupVisible && <AuthPopup/>}
        </>
    );
};
