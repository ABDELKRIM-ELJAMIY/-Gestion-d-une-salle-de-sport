const express = require('express');
const { createReservation, getUserReservations, cancelReservation } = require('../controllers/reservationController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createReservation);
router.get('/', authMiddleware, getUserReservations);
router.put('/:id/cancel', authMiddleware, cancelReservation);

module.exports = router;
