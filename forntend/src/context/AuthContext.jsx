// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthState(true); // Assume token exists for authentication
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setAuthState(null);
    };

    return (
        <AuthContext.Provider value={{ authState, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
