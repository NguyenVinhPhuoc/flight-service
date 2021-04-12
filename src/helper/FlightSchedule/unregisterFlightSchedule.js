const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/dbconfig');

module.exports = async function (id) {
  try {
    const flightSchedule = await sequelize.query(
      `SP_UnregisterFlightSchedule ${id}`,
      {
        type: QueryTypes.UPDATE,
      },
    );
    return flightSchedule;
  } catch (error) {
    console.error(error);
  }
};
