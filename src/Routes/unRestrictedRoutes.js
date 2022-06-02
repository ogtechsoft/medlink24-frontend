import React, { useMemo } from 'react'
import { Navigate } from 'react-router-dom'

const UnRestrictedRoutes = ({children}) => {
    const userId = localStorage.getItem('user_id')
    const token = localStorage.getItem('token')
    const isAuthenticated = useMemo(() => {
        return (userId && token) ? true : false;
    }, [children])

    return isAuthenticated ? <Navigate to={`/meet/${userId}`} /> : children;
}

export default UnRestrictedRoutes;
