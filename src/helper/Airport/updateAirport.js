const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/dbconfig');

module.exports = async function updateAirport(
  id,
  airportName = null,
  airportLocation = null,
  airportCode = null,
) {
  try {
    let paramString = `@id = ${id}`;
    paramString += airportName ? `, @airportName = ${airportName}` : ``;
    paramString += airportLocation
      ? `, @airportLocation = ${airportLocation}`
      : ``;
    paramString += airportCode ? `, @airportCode = ${airportCode}` : ``;
    const airports = await sequelize.query(`SP_UpdateAirport ${paramString}`, {
      type: QueryTypes.UPDATE,
    });
    return airports;
  } catch (error) {
    console.error(error);
  }
};
