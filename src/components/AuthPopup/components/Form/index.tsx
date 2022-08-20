import React, { useState, ChangeEvent } from 'react';
import styles from './styles.css';
import { useDispatch } from 'react-redux';
import { actionsCreators } from '../../../../redux/actions';

export const Form: React.FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        // @ts-ignore
        dispatch(actionsCreators.login(login, password));
    };

    const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" name="username" value={login} onChange={handleChangeLogin}
                    placeholder="Username" required
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
