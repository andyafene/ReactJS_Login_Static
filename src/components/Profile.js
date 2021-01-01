import { React, useEffect, useState } from 'react';
import Logout from './Logout';
import { authFetch } from '../utils/authProvider';
function Profile() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const [data, setData] = useState('');
    const getResponse = () => {
        authFetch('http://localhost:5000/api/auth/profile', requestOptions).then((response) =>
            response.json().then((data) => {
                console.log(data.msg);
                setData(data.msg);
            })
        );
    };
    getResponse();
    return (
        <div className="welcome">
            <center>
                <h2 style={{ backgroundColor: 'white', fontFamily: 'sans-serif', fontSize: '100px' }}>{data}</h2>
            </center>
            <center>
                {' '}
                <Logout />{' '}
            </center>
        </div>
    );
}
export default Profile;
