import { constants } from './constants';

type Actions = {
    showAuthPopup: {
        type: constants.SHOW_AUTH_POPUP;
    },
    hideAuthPopup: {
        type: constants.HIDE_AUTH_POPUP;
    },
    logout: {
        type: constants.LOGOUT;
    }
};

const actionsCreators = {
    showAuthPopup: (): Actions['showAuthPopup'] => (
        { type: constants.SHOW_AUTH_POPUP }
    ),
    hideAuthPopup: (): Actions['showAuthPopup'] => (
        { type: constants.HIDE_AUTH_POPUP }
    ),
    logout: (): Actions['logout'] => (
        { type: constants.LOGOUT }
    ),
};

export {
    actionsCreators,
};
