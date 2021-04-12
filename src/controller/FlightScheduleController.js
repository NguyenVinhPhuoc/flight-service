const getFlightSchedules = require('../helper/FlightSchedule/getFlightSchedules');
const registerFlightSchedule = require('../helper/FlightSchedule/registerFlightSchedule');
const unregisterFlightSchedule = require('../helper/FlightSchedule/unregisterFlightSchedule');
const updateFlightSchedules = require('../helper/FlightSchedule/updateFlightSchedules');

class FlightScheduleController {
  static async getFlightSchedules(req, res) {
    try {
      const { id } = req.query;
      const flightSchedule = await getFlightSchedules(id);
      return res.status(200).json({ flightSchedule });
    } catch (error) {
      console.error(error);
    }
  }

  static async registerFlightSchedule(req, res) {
    const {
      partnerId,
      ticketPrice,
      quantity,
      firstAirportId,
      transportAirportId,
      finalAirportId,
      departureTime,
      arrivalTime,
      transitTime,
    } = req.body;
    try {
      await registerAirport(
        partnerId,
        ticketPrice,
        quantity,
        firstAirportId,
        transportAirportId,
        finalAirportId,
        departureTime,
        arrivalTime,
        transitTime,
      );
      return res.status(200).json({
        message: `Created flight schedule successfully!`,
      });
    } catch (error) {
      console.error(error);
    }
  }

  static async unregisterFlightSchedule(req, res) {
    const { id } = req.query;
    try {
      await unregisterFlightSchedule(id);
      return res.status(200).json({
        message: `Unregister flight schedule successfully!`,
      });
    } catch (error) {}
  }

  static async updateFlightSchedules(req, res) {
    const {
      id,
      partnerId,
      ticketPrice,
      quantity,
      firstAirportId,
      transportAirportId,
      finalAirportId,
      departureTime,
      arrivalTime,
      transitTime,
    } = req.body;
    try {
      await updateFlightSchedules(
        partnerId,
        ticketPrice,
        quantity,
        firstAirportId,
        transportAirportId,
        finalAirportId,
        departureTime,
        arrivalTime,
        transitTime,
      );
      return res.status(200).json({
        message: `Update flight schedule ${id} successfully!`,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = FlightScheduleController;
