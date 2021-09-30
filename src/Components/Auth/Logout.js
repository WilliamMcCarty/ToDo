import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router'
import './Auth.css'
import Profile from './Profile'

export default function Logout() {
    const {logout} = useAuth();
    const history = useHistory();

    function handleAuth(){
        logout();
        history.push('/login');
    }

    return (
        <div className="logout text-center p-3 bg-dark text-white">
                <Profile />
            {/* {currentUser && */}
                <button onClick={() => handleAuth()} className="btn btn-info">Logout</button>
            {/* }             */}
        </div>
    )
}
