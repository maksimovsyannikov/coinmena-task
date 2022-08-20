import styles from './styles.css';
import React from 'react';
import classNames from 'classnames/bind';
import { noop } from '../../../../constants';

const cx = classNames.bind(styles);

type Props = {
    direction: 'asc' | 'desc' | 'none',
    handleClick?: () => void;
}

export const Arrow: React.FC<Props> = ({
    direction,
    handleClick = noop(),
}) => {
    if (direction === 'none') {
        return null;
    }

    return (
        <div
            onClick={handleClick}
            className={(cx({ arrow: true, up: direction === 'desc', down: direction === 'asc' }))}
        />
    );
};
