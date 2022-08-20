import React, { useEffect } from 'react';
import styles from './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { assetsSelectors } from '../../../redux/selectors';
import { actionsCreators } from '../../../redux/actions';
import classNames from 'classnames/bind';
import { Arrow } from './Arrow';

const cx = classNames.bind(styles);

export const Home: React.FC = () => {
    const dispatch = useDispatch();
    const assets = useSelector(assetsSelectors.assets);
    const sortingField = useSelector(assetsSelectors.sortingField);
    const sortingOrder = useSelector(assetsSelectors.sortingOrder);

    useEffect(() => {
        dispatch(actionsCreators.clearAssets());
        // eslint-disable-next-line
        // @ts-ignore
        dispatch(actionsCreators.loadAssets());
    }, []);

    if (assets.length === 0) {
        return null;
    }

    const handleLoadMoreClick = () => {
        // eslint-disable-next-line
        // @ts-ignore
        dispatch(actionsCreators.loadAssets());
        dispatch(actionsCreators.resetSorting());
    };

    const handleSortClick = (field: 'name' | 'price') => {
        switch (sortingOrder) {
            case 'none':
            case 'desc':
                dispatch(actionsCreators.setSorting({ field, order: 'asc' }));
                break;
            case 'asc':
                dispatch(actionsCreators.setSorting({ field, order: 'desc' }));
                break;
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Assets
            </div>
            <div className={cx('row', 'header')}>
                <div className={cx('col', 'headerCol', 'withHover')} onClick={() => handleSortClick('name')}>
                    Coin Name
                    {sortingField === 'name' && <Arrow direction={sortingOrder}/>}
                </div>
                <div className={cx('col', 'headerCol', 'withHover')} onClick={() => handleSortClick('price')}>
                    Price
                    {sortingField === 'price' && <Arrow direction={sortingOrder}/>}
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
            <div className={styles.loadMore}>
                <button onClick={handleLoadMoreClick}>Load more</button>
            </div>
        </div>
    );
};
