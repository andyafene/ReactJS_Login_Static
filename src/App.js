import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import './index.css';

function App() {
    const AdminUser = {
        name: 'Aparna',
        email: 'aparnaiyer9868@gmail.com',
        password: 'aparna'
    };
    const [user, setUser] = useState({ name: '', email: '' });
    const [error, setError] = useState('');

    const Login = (details) => {
        console.log(details);

        if (details.email == AdminUser.email && details.password == AdminUser.password) {
            console.log('Logged In');
            setUser({
                name: details.name,
                email: details.email
            });
        } else {
            setError('Details  doesnt match ');
        }
    };
    const Logout = () => {
        setUser({ name: '', email: '' });
    };
    return (
        <div className="App">
            {user.email != '' ? (
                <div className="welcome">
                    <h2>
                        Welcome, <span>{user.name}</span>
                    </h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    );
}

export default App;
