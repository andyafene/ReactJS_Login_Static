import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Logout from './Logout';
import Profile from './Profile';
export function Welcome(user, logout) {
    const logoutFun = user.Logout;
    const currUser = user.User;
    return (
        <div className="welcome">
            <h2> Welcome</h2>
            <h2>
                <Link to="/profile">Profile</Link>
            </h2>
            <Logout />
        </div>
    );
}
