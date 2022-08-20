import { applyMiddleware, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { IState } from './types.h';

const configureStore = (initialState?: IState): Store<IState> => {
    const middlewareEnhancer = applyMiddleware(thunkMiddleware);

    const enhancers = [middlewareEnhancer];

    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(...enhancers),
    );
};

export { configureStore };
