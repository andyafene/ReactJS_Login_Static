import { createTokenProvider } from './tokenProvider';
import jwtDecode from 'jwt-decode';

const tokenProvider = createTokenProvider();
/* Implementation */
export const login = (newToken) => {
    // console.log(newToken);
    tokenProvider.setToken(newToken);
};

export const logout = () => {
    tokenProvider.setToken(null);
};

export const authFetch = async (input, init) => {
    const token = await tokenProvider.getToken();
    init = init || {};

    init.headers = {
        ...init.headers,
        'auth-token': token
    };
    return fetch(input, init);
};
