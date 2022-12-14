import { IAsset } from '../redux/types.h';

const users: Array<{email: string, password: string, name: string}> = [
    {
        email: 'admin@gmail.com',
        password: '000000',
        name: 'Barly Vallentito',
    },
];

type LoginResult = {
    success: boolean,
    name?: string,
    email?: string
}

type LoadAssetsResponse = {
    data: Array<{
        id: string,
        name: string,
        symbol: string,
        metrics: {
            market_data: {
                price_usd: number,
            }
        }
    }>
}

const ASSETS_PER_PAGE = 10;

const login = (email: string, password: string): Promise<LoginResult> => {
    return new Promise((resolve) => {
        let isValid = false;
        for (const user of users) {
            if (user.email === email && user.password === password) {
                isValid = true;
                resolve({
                    success: true,
                    name: user.name,
                    email: email,
                });
            }
        }

        if (!isValid) {
            resolve({ success: false });
        }
    });
};

const loadAssets = (page: number): Promise<IAsset[]> => {
    return new Promise((resolve, reject) => {
        const apiUrl = `https://data.messari.io/api/v2/assets?fields=id,name,symbol,metrics/market_data/price_usd&limit=${ASSETS_PER_PAGE}&page=${page}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(res => res)
            .then((payload: LoadAssetsResponse) => {
                const assets: IAsset[] = payload.data.map((item) => {
                    return {
                        id: item.id,
                        name: item.name,
                        shortName: item.symbol,
                        priceInUsd: item.metrics.market_data.price_usd,
                    };
                });
                resolve(assets);
            }).catch((error) => reject(error));
    });
};

export { login, loadAssets };
