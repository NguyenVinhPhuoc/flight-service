const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/dbconfig');

module.exports = async function getFlightSchedules(id = null) {
  try {
    if (id === null) {
      const flightSchedule = await sequelize.query(`SP_GetAirports`, {
        type: QueryTypes.SELECT,
      });
      return flightSchedule;
    }
    const flightSchedule = await sequelize.query(`SP_GetAirport '${id}'`, {
      type: QueryTypes.SELECT,
    });
    return flightSchedule;
  } catch (error) {
    console.error(error);
  }
};
