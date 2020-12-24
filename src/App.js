import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import './index.css';
import { Welcome } from './components/Welcome';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
function App() {
    const AdminUser = {
        name: 'Aparna',
        email: 'aparnaiyer9868@gmail.com',
        password: 'aparna'
    };

    const [user, setUser] = useState({ name: '', email: '', loggedIn: false });
    const [error, setError] = useState('');

    const Login = (details) => {
        if (details.email == AdminUser.email && details.password == AdminUser.password) {
            console.log('Logged In');
            setUser({
                name: details.name,
                email: details.email,
                loggedIn: true
            });
        } else {
            setError('Details  doesnt match ');
        }
    };

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => <LoginForm {...props} Login={Login} error={error} />}>
                        {user.email != '' ? (
                            <Redirect
                                to={{
                                    pathname: '/welcome'
                                }}
                            />
                        ) : null}
                    </Route>
                    <Route path="/welcome" render={(props) => <Welcome {...props} User={user} />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
