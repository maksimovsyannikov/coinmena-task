import { IState } from "./types.h";

const defaultState: IState = {
    user: {
        authenticated: false,
        login: '',
        name: '',
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
