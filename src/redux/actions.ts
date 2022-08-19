import { Dispatch } from 'redux';
import { login as loginRequest } from '../services/Api';
import { constants } from './constants';

type SetUserPayload = {
    login: string,
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
    login: (login: string, password: string) => (dispatch: Dispatch) => {
        loginRequest(login, password).then((loginResult) => {
            if (loginResult.success) {
                dispatch(actionsCreators.setUser({
                    login: loginResult.login as string,
                    name: loginResult.name as string,
                }));
                dispatch(actionsCreators.hideAuthPopup());
            } else {
                alert('todo handle error');
            }
        });
    },
};

export {
    actionsCreators,
    Actions,
};
