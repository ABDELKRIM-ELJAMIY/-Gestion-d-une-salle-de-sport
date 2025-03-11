// src/pages/TrainerDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getTrainerSessions } from '../services/authService';

const TrainerDashboard = () => {
    const { authState } = useAuth();
    const navigate = useNavigate();
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        if (!authState) {
            navigate('/login');
        }
        getTrainerSessions().then((data) => setSessions(data));
    }, [authState, navigate]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Trainer Dashboard</h1>
            <div className="mt-4">
                <h2 className="text-xl">Your Sessions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {sessions.map((session) => (
                        <div key={session.id} className="bg-white p-4 rounded shadow-md">
                            <h3 className="text-lg font-bold">{session.name}</h3>
                            <p>{session.description}</p>
                            <p>Reserved by: {session.reservedBy.length} members</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrainerDashboard;
