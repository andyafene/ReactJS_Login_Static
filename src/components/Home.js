import React from 'react';

import { Link } from 'react-router-dom';

export function Home() {
    // /console.log(res.CallToApi());

    return (
        <div className="welcome">
            <h1> Home </h1>
            <div style={styleDiv}>
                {' '}
                <h3>
                    <Link to="/profile"> My Profile</Link>
                </h3>
            </div>

            {/* <Link style={{ backgroundColor: 'lightgrey', color: 'red', textDecoration: 'inherit', fontSize: '20pt' }} to="/login">
                Login
            </Link> */}

            {localStorage.getItem('auth-token') ? null : (
                <Link style={{ backgroundColor: 'lightgrey', color: 'red', textDecoration: 'inherit', fontSize: '20pt' }} to="/login">
                    Login
                </Link>
            )}
        </div>
    );
}

let styleDiv = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top'
};
