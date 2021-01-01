import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../utils/authProvider';
import { createTokenProvider } from '../utils/tokenProvider';
import jwtDecode from 'jwt-decode';
function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: '', email: '', password: '' });
    const tokenProvider = createTokenProvider();
    const history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: details })
        };

        fetch('http://localhost:5000/api/auth/signin', requestOptions).then((response) => {
            response.json();
            login(response.headers.get('auth-token'));
        });

        // console.log(jwtDecode(localStorage.getItem('auth-token')));
        if (localStorage.getItem('auth-token')) {
            history.push('/welcome');
        }
    };

    return (
        <form type="POST" onSubmit={submitHandler}>
            <div className="form-inner">
                <center>
                    <h2>Login</h2>
                </center>
                {error != '' ? <div className="error">{error}</div> : ''}
                <div className="form-group">
                    <label>
                        Name : <span></span>
                    </label>
                    <input type="text" name="name" id="name" onChange={(e) => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>
                <div className="form-group">
                    <label>
                        Email :<span></span>
                    </label>
                    <input type="text" name="email" id="email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className="form-group">
                    <label>
                        Password :<span></span>
                    </label>
                    <input type="password" name="password" id="password" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" />
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
