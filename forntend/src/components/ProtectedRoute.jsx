// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { authState } = useAuth();

    // If the user is not authenticated, redirect to login page
    if (!authState) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
