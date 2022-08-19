import { IState } from "./types.h";

const userSelectors = {
    isAuthenticated: (state: IState): boolean => state.user.authenticated,
    userName: (state: IState): string => state.user.name,
};

const uiSelectors = {
    authPopupVisible: (state: IState): boolean => state.ui.authPopupVisible,
}

export { userSelectors, uiSelectors };
