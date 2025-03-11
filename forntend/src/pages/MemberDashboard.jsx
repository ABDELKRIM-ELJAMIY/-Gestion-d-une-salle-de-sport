// src/pages/MemberDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getSessions, reserveSession } from '../services/authService';

const MemberDashboard = () => {
    const { authState } = useAuth();
    const navigate = useNavigate();
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        if (!authState) {
            navigate('/login');
        }
        getSessions().then((data) => setSessions(data));
    }, [authState, navigate]);

    const handleReserve = (sessionId) => {
        reserveSession(sessionId)
            .then(() => alert('Session reserved!'))
            .catch((error) => alert('Failed to reserve session'));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Member Dashboard</h1>
            <div className="mt-4">
                <h2 className="text-xl">Available Sessions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {sessions.map((session) => (
                        <div key={session.id} className="bg-white p-4 rounded shadow-md">
                            <h3 className="text-lg font-bold">{session.name}</h3>
                            <p>{session.description}</p>
                            <button
                                onClick={() => handleReserve(session.id)}
                                className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
                            >
                                Reserve
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MemberDashboard;
