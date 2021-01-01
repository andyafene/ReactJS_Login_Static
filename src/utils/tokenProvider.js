export const createTokenProvider = () => {
    // console.log("localStorage.getItem('auth-token')", localStorage.getItem('auth-token'));
    var _token = null || !localStorage.getItem('auth-token') ? '' : localStorage.getItem('auth-token');

    // const getExpirationDate = (jwtToken) => {
    //     if (!jwtToken) {
    //         return null;
    //     }

    //     const jwt = jwtToken;

    //     // multiply by 1000 to convert seconds into milliseconds
    //     return (jwt && jwt.exp && jwt.exp * 1000) || null;
    // };

    // const isExpired = (exp) => {
    //     if (!exp) {
    //         return false;
    //     }
    //     return Date.now() > exp;
    // };

    const getToken = async () => {
        if (!_token) {
            return null;
        }

        // if (isExpired(getExpirationDate(_token.accessToken))) {
        //     const updatedToken = await fetch('/update-token', {
        //         method: 'POST',
        //         body: _token.refreshToken
        //     })
        //         .then(r => r.json());

        //     setToken(updatedToken);
        // }
        return _token;
    };
    const isLoggedIn = () => {
        // Remember it by "bang, bang you're boolean" @Gus
        return !!_token;
    };

    const setToken = (token) => {
        if (token) {
            localStorage.setItem('auth-token', token);
        } else {
            localStorage.removeItem('auth-token');
        }
        _token = token;
    };

    return {
        getToken,
        isLoggedIn,
        setToken
        // subscribe,
        // unsubscribe
    };
};
