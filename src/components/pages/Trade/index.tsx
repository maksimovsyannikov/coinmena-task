import React, { ChangeEvent, useState } from 'react';
import styles from './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { assetsSelectors, tradeSelectors } from '../../../redux/selectors';
import { actionsCreators } from '../../../redux/actions';

export const Trade: React.FC = () => {
    const dispatch = useDispatch();

    const assets = useSelector(assetsSelectors.assets);
    const assetFromId = useSelector(tradeSelectors.assetFromId);
    const assetToId = useSelector(tradeSelectors.assetToId);
    const selectedAssetFromPriceInUsd = useSelector(tradeSelectors.selectedAssetFromPriceInUsd);
    const selectedAssetToPriceInUsd = useSelector(tradeSelectors.selectedAssetToPriceInUsd);

    const [fromAmountValue, setFromAmountValue] = useState('0');
    const [fromAmount, setFromAmount] = useState(0);

    const handleChangeFrom = (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        if (val === '') {
            setFromAmountValue('');
            setFromAmount(0);
        } else {
            if (/^\d+\.?\d*$/.test(val)) {
                setFromAmountValue(val);
                setFromAmount(parseFloat(val));
            }
        }
    };

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(actionsCreators.setAssetFromId(event.target.value));
    };

    const handleSelectChangeTo = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(actionsCreators.setAssetToId(event.target.value));
    };

    // assume that first we sell asset to usd
    const usdBySellingFromAsset = selectedAssetFromPriceInUsd !== undefined
        ? fromAmount * selectedAssetFromPriceInUsd
        : undefined;

    // then use this usd to buy second asset
    const targetAssetsAfterSellingInitialAsset = (selectedAssetToPriceInUsd !== undefined && usdBySellingFromAsset !== undefined)
        ? (usdBySellingFromAsset / selectedAssetToPriceInUsd).toFixed(2)
        : '';

    return (
        <>
            <h2>Trade</h2>
            <div className={styles.wrapper}>
                <h3>Exchange</h3>

                <div className={styles.row}>
                    <input type="text" value={fromAmountValue} onChange={handleChangeFrom} />
                    <select name="from" value={assetFromId} onChange={handleSelectChange}>
                        {assets.map((asset) =>
                            <option value={asset.id} key={asset.id}>{asset.name}</option>
                        )}
                    </select>
                </div>
                <div>
                    {usdBySellingFromAsset !== undefined &&
                        <>{usdBySellingFromAsset.toFixed(2)} $</>
                    }
                </div>

                <div className={styles.arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>
                <div className={styles.row}>
                    <input type="text" value={targetAssetsAfterSellingInitialAsset} disabled />
                    <select name="from" value={assetToId} onChange={handleSelectChangeTo}>
                        <option value="" key='empty'></option>
                        {assets.map((asset) =>
                            <option value={asset.id} key={asset.id}>{asset.name}</option>
                        )}
                    </select>
                </div>
            </div>
        </>
    );
};
