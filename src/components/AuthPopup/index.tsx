import React from 'react';
import styles from './styles.css';
import { Close } from './components/Close';

export const AuthPopup: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Close />
        </div>
    );
};
