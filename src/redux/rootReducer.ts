import { IState } from './types.h';
import { Actions } from './actions';
import { constants } from './constants';

const defaultState: IState = {
    user: {
        authenticated: false,
        login: '',
        name: '',
    },
    ui: {
        authPopupVisible: false,
    },
};


type RootAction = Actions[keyof Actions];

const rootReducer = (state: IState = defaultState, action: RootAction) => {
    switch (action.type) {
        case constants.SHOW_AUTH_POPUP:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    authPopupVisible: true,
                },
            };
        case constants.HIDE_AUTH_POPUP:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    authPopupVisible: false,
                },
            };
        case constants.SET_USER:
            return {
                ...state,
                user: {
                    authenticated: true,
                    name: action.payload.name,
                    login: action.payload.login,
                },
            };
        case constants.LOGOUT:
            return {
                ...state,
                user: { ...defaultState.user },
            };
        default:
            return state;
    }
};

export { rootReducer };
