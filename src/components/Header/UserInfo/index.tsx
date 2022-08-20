import styles from './styles.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../../redux/selectors';

export const UserInfo: React.FC = () => {
    const name = useSelector(userSelectors.userName);
    const isAuthenticated = useSelector(userSelectors.isAuthenticated);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.firstLine}>Hi {name},</p>
            <p className={styles.secondLine}>Welcome back!</p>
        </div>
    );
};
