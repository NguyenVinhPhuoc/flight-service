const express = require('express');
const router = express.Router();
const AirportController = require('../controller/AirportController');

router
  .route('/')
  .post(AirportController.registerAirport)
  .patch(AirportController.updateAirport);
router.route('/:id.:airportName').get(AirportController.getAirports);

router.route('/unregister').patch(AirportController.unregisterAirport);
module.exports = router;
