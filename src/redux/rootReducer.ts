import { IState } from "./types.h";

const defaultState: IState = {
    user: {
        authenticated: false,
        login: '',
        name: '',
    },
    ui: {
        authPopupVisible: false,
    }
}

type Action = {
    type: string,
    payload?: any
};

const rootReducer = (state: IState = defaultState, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export { rootReducer };
