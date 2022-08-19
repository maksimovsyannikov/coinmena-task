import React from 'react';
import { Layout } from "./components/Layout";
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

export const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout />
            </Router>
        </Provider>
    );
}
