// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { authState, logout } = useAuth();

    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <Link to="/" className="font-bold text-xl">Gym Platform</Link>
            <div>
                {authState ? (
                    <>
                        <Link to="/member-dashboard" className="mr-4">Member Dashboard</Link>
                        <Link to="/trainer-dashboard" className="mr-4">Trainer Dashboard</Link>
                        <button onClick={logout} className="bg-red-500 p-2 rounded">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="mr-4">Login</Link>
                        <Link to="/register" className="mr-4">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
