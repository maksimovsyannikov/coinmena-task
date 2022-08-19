import React from 'react';
import styles from './styles.css';
import { Close } from './components/Close';
import { Form } from './components/Form';

export const AuthPopup: React.FC = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Close />
            </div>
            <Form />
        </>
    );
};
