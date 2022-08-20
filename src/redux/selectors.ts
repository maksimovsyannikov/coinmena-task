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

export { userSelectors, uiSelectors, assetsSelectors };
