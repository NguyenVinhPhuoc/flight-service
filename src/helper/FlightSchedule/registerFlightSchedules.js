const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/dbconfig');

module.exports = async function registerFlightSchedule(
  partnerId,
  ticketPrice,
  quantity,
  firstAirportId,
  transportAirportId = null,
  finalAirportId,
  departureTime,
  arrivalTime,
  transitTime = null,
) {
  try {
    const paramString = `@partnerId = '${partnerId}' ,@ticketPrice = ${ticketPrice}, @quantity = ${quantity}, @firstAirportId = '${firstAirportId}',@transportAirportId ='${transportAirportId}',@finalAirportId='${finalAirportId}',@departureTime = '${departureTime}' ,@arrivalTime = '${arrivalTime}',@transitTime = '${transitTime}'`;
    const flightSchedule = await sequelize.query(
      `SP_RegisterFlightSchedule ${paramString}`,
      {
        type: QueryTypes.INSERT,
      },
    );
    return flightSchedule;
  } catch (error) {
    console.error(error);
  }
};
