import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { logout } from '../utils/authProvider';
function Logout() {
    let history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        console.log(localStorage.getItem('auth-token'));
        logout(localStorage.getItem('auth-token'));
        if (!localStorage.getItem('auth-toke')) {
            history.push('/');
        }
    };

    return (
        <div className="form-group">
            <button type="button" onClick={handleClick}>
                Logout
            </button>
        </div>
    );
}
export default Logout;
