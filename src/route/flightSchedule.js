const express = require('express');
const FlightScheduleController = require('../controller/FlightScheduleController');
const router = express.Router();

router
  .route('/')
  .post(FlightScheduleController.registerFlightSchedule)
  .patch(FlightScheduleController.updateFlightSchedules);
router.route('/:id').get(FlightScheduleController.getFlightSchedules);

router
  .route('/unregister')
  .patch(FlightScheduleController.unregisterFlightSchedule);
module.exports = router;
