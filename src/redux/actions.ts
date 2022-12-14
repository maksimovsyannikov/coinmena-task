import { Dispatch } from 'redux';
import { loadAssets as loadAssetsRequest, login as loginRequest } from '../services/Api';
import { constants } from './constants';
import { IAsset } from './types.h';
import store from './store';
import { assetsSelectors } from './selectors';

type SetUserPayload = {
    email: string,
    name: string
};

type Actions = {
    showAuthPopup: {
        type: constants.SHOW_AUTH_POPUP;
    },
    hideAuthPopup: {
        type: constants.HIDE_AUTH_POPUP;
    },
    setUser: {
        type: constants.SET_USER;
        payload: SetUserPayload
    }
    logout: {
        type: constants.LOGOUT;
    }
    setAssets: {
        type: constants.SET_ASSETS;
        payload: IAsset[]
    }
    clearAssets: {
        type: constants.CLEAR_ASSETS;
    },
    setSorting: {
        type: constants.SET_SORTING;
        payload: {
            field: 'name' | 'price',
            order: 'asc' | 'desc'
        },
    }
    resetSorting: {
        type: constants.RESET_SORTING;
    },
    setAssetFromId: {
        type: constants.SET_ASSET_FROM_ID;
        payload: string;
    },
    setAssetToId: {
        type: constants.SET_ASSET_TO_ID;
        payload: string;
    },
};

const actionsCreators = {
    showAuthPopup: (): Actions['showAuthPopup'] => (
        { type: constants.SHOW_AUTH_POPUP }
    ),
    hideAuthPopup: (): Actions['hideAuthPopup'] => (
        { type: constants.HIDE_AUTH_POPUP }
    ),
    setUser: (payload: SetUserPayload): Actions['setUser'] => (
        { type: constants.SET_USER, payload }
    ),
    logout: (): Actions['logout'] => (
        { type: constants.LOGOUT }
    ),
    setAssets: (payload: IAsset[]): Actions['setAssets'] => (
        { type: constants.SET_ASSETS, payload }
    ),
    clearAssets: (): Actions['clearAssets'] => (
        { type: constants.CLEAR_ASSETS }
    ),
    resetSorting: (): Actions['resetSorting'] => (
        { type: constants.RESET_SORTING }
    ),
    setSorting: (payload: {field: 'name' | 'price', order: 'asc' | 'desc'}): Actions['setSorting'] => (
        { type: constants.SET_SORTING, payload }
    ),
    setAssetFromId: (payload: string): Actions['setAssetFromId'] => (
        { type: constants.SET_ASSET_FROM_ID, payload }
    ),
    setAssetToId: (payload: string): Actions['setAssetToId'] => (
        { type: constants.SET_ASSET_TO_ID, payload }
    ),
    login: (email: string, password: string) => (dispatch: Dispatch) => {
        loginRequest(email, password).then((loginResult) => {
            if (loginResult.success) {
                dispatch(actionsCreators.setUser({
                    email: loginResult.email as string,
                    name: loginResult.name as string,
                }));
                dispatch(actionsCreators.hideAuthPopup());
            } else {
                // eslint-disable-next-line
                alert('login error');
            }
        });
    },
    loadAssets: () => (dispatch: Dispatch) => {
        const pageToLoad = assetsSelectors.getPageToLoad(store.getState());

        loadAssetsRequest(pageToLoad)
            .then((payload) => {
                dispatch(actionsCreators.setAssets(payload));
            }).catch((error) => {
                // eslint-disable-next-line
                alert('assets load error');
                // eslint-disable-next-line
                console.log(error);
        });
    },
};

export {
    actionsCreators,
    Actions,
};
