import React, { useState, ChangeEvent } from 'react';
import styles from './styles.css';
import { useDispatch } from 'react-redux';
import { actionsCreators } from '../../../../redux/actions';

export const Form: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        // eslint-disable-next-line
        // @ts-ignore
        dispatch(actionsCreators.login(email, password));
    };

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email" name="email" value={email} onChange={handleChangeEmail}
                    placeholder="Email" required
                />
                <input
                    type="password" name="username" value={password} onChange={handleChangePassword}
                    placeholder="Password" required
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};
