import React from "react";
import {useSelector} from "react-redux";
import {userSelectors} from "../../../redux/selectors";
import {TradeForm} from "./Form";

export const Trade: React.FC = () => {
    const isAuthenticated = useSelector(userSelectors.isAuthenticated);

    if (isAuthenticated) {
        return <TradeForm />
    } else {
        return <div>you need to log in</div>
    }
}
