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
    assets: {
        page: 1,
        items: [],
        // items: [
        //     {
        //         id: '1e31218a-e44e-4285-820c-8282ee222035',
        //         name: 'Bitcoin',
        //         shortName: 'BTC',
        //         priceInUsd: 21244.025962651198
        //     },
        //     {
        //         id: '21c795f5-1bfd-40c3-858e-e9d7e820c6d0',
        //         name: 'Ethereum',
        //         shortName: 'ETH',
        //         priceInUsd: 1628.5652911504703
        //     },
        //     {
        //         id: '51f8ea5e-f426-4f40-939a-db7e05495374',
        //         name: 'Tether',
        //         shortName: 'USDT',
        //         priceInUsd: 0.9999473588575684
        //     },
        //     {
        //         id: '4515ba15-2719-4183-b0ca-b9255d55b67e',
        //         name: 'USD Coin',
        //         shortName: 'USDC',
        //         priceInUsd: 1
        //     },
        //     {
        //         id: '7dc551ba-cfed-4437-a027-386044415e3e',
        //         name: 'BNB',
        //         shortName: 'BNB',
        //         priceInUsd: 285.5680661675569
        //     },
        //     {
        //         id: '5da7bde4-61e9-4a6f-9fc3-7ed66effb198',
        //         name: 'Binance USD',
        //         shortName: 'BUSD',
        //         priceInUsd: 1
        //     },
        //     {
        //         id: '97775be0-2608-4720-b7af-f85b24c7eb2d',
        //         name: 'XRP',
        //         shortName: 'XRP',
        //         priceInUsd: 0.3402026492803081
        //     },
        //     {
        //         id: '362f0140-ecdd-4205-b8a0-36f0fd5d8167',
        //         name: 'Cardano',
        //         shortName: 'ADA',
        //         priceInUsd: 0.45237174530435037
        //     },
        //     {
        //         id: 'b3d5d66c-26a2-404c-9325-91dc714a722b',
        //         name: 'Solana',
        //         shortName: 'SOL',
        //         priceInUsd: 36.229118035636645
        //     },
        //     {
        //         id: '7d793fa7-5fc6-432a-b26b-d1b10769d42e',
        //         name: 'Dogecoin',
        //         shortName: 'DOGE',
        //         priceInUsd: 0.06920674202107609
        //     }
        // ],
    },
};

type RootAction = Actions[keyof Actions];

const rootReducer = (state: IState = defaultState, action: RootAction): IState => {
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
        case constants.SET_ASSETS:
            return {
                ...state,
                assets: {
                    ...state.assets,
                    page: state.assets.page + 1,
                    items: [...state.assets.items, ...action.payload],
                },
            };
        case constants.CLEAR_ASSETS:
            return {
                ...state,
                assets: { ...defaultState.assets },
            };
        default:
            return state;
    }
};

export { rootReducer };
