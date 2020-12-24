import React, { useState } from 'react';
import '../index.css';
import Logout from './Logout';

export function Welcome(user, logout) {
    const logoutFun = user.logout;
    const currUser = user.User;
    const [details, setDetails] = useState({ name: currUser.name, email: currUser.email, loggedIn: currUser.loggedIn });

    return (
        <div className="welcome">
            <h2>
                {' '}
                Welcome,<p>{currUser.name}</p>
            </h2>

            <Logout user={details} />
        </div>
    );
}
