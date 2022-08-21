interface IState {
    user: {
        authenticated: boolean;
        email: string;
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
    trade: {
        assetFromId: string;
        assetToId: string;
    }
}

interface IAsset {
    id: string;
    name: string,
    shortName: string,
    priceInUsd: number,
}

export { IState, IAsset };
