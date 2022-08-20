import { IAsset, IState } from './types.h';

const userSelectors = {
    isAuthenticated: (state: IState): boolean => state.user.authenticated,
    userName: (state: IState): string => state.user.name,
};

const uiSelectors = {
    authPopupVisible: (state: IState): boolean => state.ui.authPopupVisible,
};

const assetsSelectors = {
    getPageToLoad: (state: IState): number => state.assets.page,
    assets: (state: IState): IAsset[] => state.assets.items,
};

export { userSelectors, uiSelectors, assetsSelectors };
