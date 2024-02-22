import React from 'react'
import { useAuthContext } from '../contexts/AuthContext';
import Login from './auth/Login';

export default function PrivatePath(props) {
    const { curUserToken } = useAuthContext();
    const { Component } = props;

    if (!curUserToken) {
        return <Login />
    } else {
        return <Component />
    }


}