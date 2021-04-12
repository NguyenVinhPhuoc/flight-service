const getAirports = require('../helper/Airport/getAirports');
const registerAirport = require('../helper/Airport/registerAirport');
const unregisterAirport = require('../helper/Airport/unregisterAirport');
const updateAirport = require('../helper/Airport/updateAirport');

class AirportController {
  static async getAirports(req, res) {
    const { id, airportName } = req.params;
    try {
      const airports = await getAirports(id, airportName);
      return res.status(200).json({ airports });
    } catch (error) {
      console.error(error);
    }
  }

  static async registerAirport(req, res) {
    const { airportName, airportLocation, airportCode } = req.body;
    try {
      await registerAirport(airportName, airportLocation, airportCode);
      return res.status(200).json({
        message: `Created ${airportName} successfully!`,
      });
    } catch (error) {
      console.error(error);
    }
  }
  static async updateAirport(req, res) {
    const { id, airportName, airportCode, airportLocation } = req.body;
    try {
      await updateAirport(id, airportName, airportLocation, airportCode);
      return res.status(200).json({
        message: `Updated ${airportName} successfully!`,
      });
    } catch (error) {
      console.error(error);
    }
  }
  static async unregisterAirport(req, res) {
    const { id } = req.body;
    try {
      await unregisterAirport(id);
      return res
        .status(200)
        .json({ message: `Unregister Airport ${id} successfully` });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = AirportController;
