const Reservation = require('../models/reservation');

// Réserver une session
const createReservation = async (req, res) => {
  try {
    const { sessionId } = req.body;
    const reservation = new Reservation({ user: req.user.id, session: sessionId });
    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'erreuuur serveur' });
  }
};

// Obtenir les réservations de l'utilisateur
const getUserReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user.id }).populate('session');
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'erreuuur serveur' });
  }
};

// Annuler une réservation
const cancelReservation = async (req, res) => {
  try {
    await Reservation.findByIdAndUpdate(req.params.id, { status: 'cancelled' });
    res.json({ message: 'Réservation annulée' });
  } catch (error) {
    res.status(500).json({ message: 'erreuuur serveur' });
  }
};

module.exports = { createReservation, getUserReservations, cancelReservation };
