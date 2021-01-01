import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { createTokenProvider } from './utils/tokenProvider';
export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const tokenProvider = createTokenProvider();
    return (
        <Route
            {...rest}
            render={(props) => {
                if (tokenProvider.isLoggedIn()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login'
                            }}
                        />
                    );
                }
            }}
        />
    );
};
