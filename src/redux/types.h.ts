interface IState {
    user: {
        authenticated: boolean;
        login: string;
        name: string;
    };
    ui: {
        authPopupVisible: boolean;
    },
    assets: {
        page: number;
        items: IAsset[];
        sorting: {
            field: 'name' | 'price' | 'none',
            order: 'asc' | 'desc' | 'none',
        }
    }
}

interface IAsset {
    id: string;
    name: string,
    shortName: string,
    priceInUsd: number,
}

export { IState, IAsset };
