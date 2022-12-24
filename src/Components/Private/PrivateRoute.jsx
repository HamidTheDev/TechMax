import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Usercontext } from '../Auth/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(Usercontext)
    const location = useLocation()

    if (loader) {
        return <div>Loading...</div>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;