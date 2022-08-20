import React, { useEffect } from 'react';
import styles from './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { assetsSelectors } from '../../../redux/selectors';
import { actionsCreators } from '../../../redux/actions';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Home: React.FC = () => {
    const dispatch = useDispatch();
    const assets = useSelector(assetsSelectors.assets);

    useEffect(() => {
        dispatch(actionsCreators.clearAssets());
        // eslint-disable-next-line
        // @ts-ignore
        dispatch(actionsCreators.loadAssets());
    }, []);

    if (assets.length === 0) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Assets
            </div>
            <div className={cx('row', 'header')}>
                <div className={cx('col', 'headerCol')}>
                    Coin Name
                </div>
                <div className={cx('col', 'headerCol')}>
                    Price
                </div>
                <div className={cx('col', 'headerCol')}>
                    Action
                </div>
            </div>
            <div className={styles.items}>
                {assets.map((asset) =>
                    <div key={asset.id} className={styles.row}>
                        <div className={cx('col', 'listCol')}>
                            {asset.name} <span className={styles.shortName}>{asset.shortName}</span>
                        </div>
                        <div className={cx('col', 'listCol')}>
                            ${asset.priceInUsd.toFixed(2)}
                        </div>
                        <div className={cx('col', 'listCol')}>
                            action
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
