const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/dbconfig');

module.exports = async function registerAirport(
  airportName,
  airportLocation,
  airportCode,
) {
  try {
    const paramString = `@airportName = ${airportName}, @airportLocation = ${airportLocation}, @airportCode = ${airportCode}`;
    const airports = await sequelize.query(
      `SP_RegisterAirport ${paramString}`,
      {
        type: QueryTypes.INSERT,
      },
    );
    return airports;
  } catch (error) {
    console.error(error);
  }
};
