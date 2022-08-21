import { IState } from './types.h';

const userSelectors = {
    isAuthenticated: (state: IState): boolean => state.user.authenticated,
    userName: (state: IState): string => state.user.name,
};

const uiSelectors = {
    authPopupVisible: (state: IState): boolean => state.ui.authPopupVisible,
};

const assetsSelectors = {
    getPageToLoad: (state: IState) => state.assets.page,
    assets: (state: IState) => state.assets.items,
    sortingField: (state: IState) => state.assets.sorting.field,
    sortingOrder: (state: IState) => state.assets.sorting.order,
};

const tradeSelectors = {
    assetFromId: (state: IState) => state.trade.assetFromId,
    assetToId: (state: IState) => state.trade.assetToId,
    selectedAssetFromPriceInUsd: (state: IState) => {
        const asset = state.assets.items.find((asset) => asset.id === state.trade.assetFromId);
        return asset ? asset.priceInUsd : undefined;
    },
    selectedAssetToPriceInUsd: (state: IState) => {
        const asset = state.assets.items.find((asset) => asset.id === state.trade.assetToId);
        return asset ? asset.priceInUsd : undefined;
    },
};

export { userSelectors, uiSelectors, assetsSelectors, tradeSelectors };
