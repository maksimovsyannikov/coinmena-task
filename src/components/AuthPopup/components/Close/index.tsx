import React, { MouseEvent } from 'react';
import styles from './styles.css';
import { useDispatch } from 'react-redux';
import { actionsCreators } from '../../../../redux/actions';

export const Close: React.FC = () => {
    const dispatch = useDispatch();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        dispatch(actionsCreators.hideAuthPopup());
    };

    return (
        <a href="#" className={styles.close} onClick={handleClick}/>
    );
};
