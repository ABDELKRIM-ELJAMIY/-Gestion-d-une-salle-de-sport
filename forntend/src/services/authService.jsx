// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';  // Ensure this URL is correct

// Register a new user
const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error.response?.data || error.message);
        throw error;
    }
};

// Login a user
const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data; // Expect JWT token here
    } catch (error) {
        console.error('Error logging in:', error.response?.data || error.message);
        throw error;
    }
};

export default {
    register,
    login,
};
