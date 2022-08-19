import React from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

type MenuItem = {
    link: string;
    name: string;
}

const menuItems: MenuItem[] = [
    {
        link: '/',
        name: 'Home',
    },
    {
        link: '/trade',
        name: 'Trade',
    },
];

export const Menu = () => {
    const cx = classNames.bind(styles);
    const location = useLocation();

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>main menu</span>
            <ul className={styles.list}>
                {menuItems.map(
                    (item) =>
                        <li className={cx({ item: true, active: location.pathname === item.link })} key={item.link}>
                            <Link to={item.link}>{item.name}</Link>
                        </li>

                )}
            </ul>
        </div>
    );
};
