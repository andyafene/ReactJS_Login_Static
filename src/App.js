import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import './index.css';
import { Welcome } from './components/Welcome';
import { Home } from './components/Home';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
function App() {
    const AdminUser = {
        name: 'Aparna',
        email: 'aparnaiyer9868@gmail.com',
        password: 'aparna'
    };
    const history = useHistory();
    let [user, setUser] = useState({ name: '', email: '', loggedIn: false });
    let [error, setError] = useState('');
    const Login = (details) => {
        if (details.email === AdminUser.email && details.password === AdminUser.password) {
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

    const Logout = (fun) => {
        let user1 = () =>
            setUser({
                name: '',
                email: '',
                loggedIn: false
            });

        user1();

        history.push('/');
    };
    return (
        <div className="App">
            <Router>
                <Switch>
                    {/* <Route exact path="/login" render={(props) => <LoginForm {...props} Login={Login} error={error} />}>
                        {localStorage.getItem('auth-token') ? (
                            <Redirect
                                to={{
                                    pathname: '/welcome'
                                }}
                            />
                        ) : null}
                    </Route> */}
                    <Route exact path="/login" render={(props) => <LoginForm {...props} Login={Login} error={error} />} />
                    <Route path="/welcome" render={(props) => <Welcome {...props} User={user} Logout={Logout} />}></Route>
                    <ProtectedRoute path="/profile" component={Profile} />
                    <Route path="/" render={(props) => <Home {...props} />} />

                    {/* <ProtectedRoute isAuthenticated={isAuthenticated} path="/welcome" logout={Logout} component={Welcome} /> */}
                    {/* <GuardedRoute path="/welcome" render={(props) => <Welcome {...props} User={user} Logout={Logout} />} /> */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
