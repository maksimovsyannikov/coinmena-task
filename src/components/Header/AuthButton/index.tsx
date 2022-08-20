import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from '../../../redux/selectors';
import { actionsCreators } from '../../../redux/actions';

export const AuthButton: React.FC = () => {
    const isAuthenticated = useSelector(userSelectors.isAuthenticated);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            isAuthenticated ? actionsCreators.logout() : actionsCreators.showAuthPopup()
        );
    };

    return (
        <button onClick={handleClick}>
            {isAuthenticated ? 'Logout' : 'Login' }
        </button>
    );
};
