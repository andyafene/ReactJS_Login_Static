import React from 'react';
import { useHistory } from 'react-router-dom';

function Logout(userArg) {
    const user = userArg.user;
    const history = useHistory();
    let handleClick = (e) => {
        e.preventDefault();
        history.push('/');
    };

    return (
        <div className="form-group">
            <button
                type="button"
                onClick={() => {
                    history.push('/welcome');
                }}>
                Logout
            </button>
        </div>
    );
}

export default Logout;
