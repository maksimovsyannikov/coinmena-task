import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSelectors} from "../../redux/selectors";
import {actionsCreators} from "../../redux/actions";

export const AuthButton = () => {
    const isAuthenticated = useSelector(userSelectors.isAuthenticated);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            isAuthenticated ? actionsCreators.showAuthPopup() : actionsCreators.logout()
        );
    }

    return (
        <button onClick={() => handleClick()}>
            {isAuthenticated ? 'Logout' : 'Login' }
        </button>
    );
};
