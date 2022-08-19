interface IState {
    user: {
        authenticated: boolean;
        login: string;
        name: string;
    };
    ui: {
        authPopupVisible: false;
    }
}

export { IState };
