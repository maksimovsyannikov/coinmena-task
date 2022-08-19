import React from 'react';
import { Layout } from "./Layout";
import { BrowserRouter as Router} from "react-router-dom";

export const App = () => {
    return (
        <Router>
            <Layout />
        </Router>
    );
}
