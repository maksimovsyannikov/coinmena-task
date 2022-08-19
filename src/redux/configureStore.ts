import { applyMiddleware, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { IState } from './types.h';

const configureStore = (initialState?: IState): Store<IState> => {
    const middlewareEnhancer = applyMiddleware(thunkMiddleware);

    return createStore(
        rootReducer,
        initialState,
        middlewareEnhancer
    );
};

export { configureStore };
