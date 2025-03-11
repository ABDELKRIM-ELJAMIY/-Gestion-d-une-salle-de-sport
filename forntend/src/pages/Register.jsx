// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('member');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser({ email, password, role })
            .then(() => navigate('/login'))
            .catch((error) => alert(error.message));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Register</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label htmlFor="email" className="block">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="border p-2 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="border p-2 w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block">Role:</label>
                    <select
                        id="role"
                        className="border p-2 w-full"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="member">Member</option>
                        <option value="trainer">Trainer</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">Register</button>
            </form>
        </div>
    );
};

export default Register;
