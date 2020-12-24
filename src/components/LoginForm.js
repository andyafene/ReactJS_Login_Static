import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: '', email: '', password: '' });

    const submitHandler = (e) => {
        console.log(e);
        e.preventDefault();
        const logdetails = Login(details);
    };

    return (
        <form onSubmit={submitHandler}>
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
