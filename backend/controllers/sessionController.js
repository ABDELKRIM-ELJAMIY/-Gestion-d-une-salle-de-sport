// controllers/sessionController.js
const Session = require('../models/Session');

const createSession = async (req, res) => {
  const { name, description, timeSlot, availableSpots } = req.body;
  try {
    const session = new Session({ name, description, trainer: req.user.id, timeSlot, availableSpots });
    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find().populate('trainer', 'name');
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createSession, getSessions };

