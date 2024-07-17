import {Outlet, Navigate} from 'react-router-dom';
import React from 'react';
import { UserCtx } from '../context/UserContext';
import { useContext } from 'react';

const useAuth = ()=>{
    const {user} = useContext(UserCtx);
    return user;
};

function AuthGuard() {
    const isUser = useAuth()
  return isUser ? <Outlet/> : <Navigate to="/login"/>;
}

export default AuthGuard;