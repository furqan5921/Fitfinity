import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const { isAuth } = useSelector(s=>s.auth)
   
    if(!isAuth)
    return <Navigate to='/login' />

    return children

}

export default PrivateRoutes;
