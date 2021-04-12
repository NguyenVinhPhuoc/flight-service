const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/dbconfig');

module.exports = async function getAirport(id = null, airportName = null) {
  try {
    if (id === null && airportName === null) {
      const airports = await sequelize.query(`SP_GetAirports`, {
        type: QueryTypes.SELECT,
      });
      return airports;
    }
    const paramString = `@id = '${id}', @partnerName = '${airportName}' `;
    const airports = await sequelize.query(`SP_GetAirport ${paramString}`, {
      type: QueryTypes.SELECT,
    });
    return airports;
  } catch (error) {
    console.error(error);
  }
};
