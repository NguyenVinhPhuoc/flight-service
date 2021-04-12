const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/dbconfig');

module.exports = async function registerFlightSchedule(
  id,
  partnerId = null,
  ticketPrice = null,
  quantity = null,
  firstAirportId = null,
  transportAirportId = null,
  finalAirportId = null,
  departureTime = null,
  arrivalTime = null,
  transitTime = null,
) {
  try {
    let paramString = `@id = ${id}`;
    paramString += partnerId ? `, @partnerId = ${partnerId}` : ``;
    paramString += ticketPrice ? `, @ticketPrice = ${ticketPrice}` : ``;
    paramString += quantity ? `, @quantity = ${quantity}` : ``;
    paramString += firstAirportId
      ? `, @firstAirportId = ${firstAirportId}`
      : ``;
    paramString += transportAirportId
      ? `, @transportAirportId = ${transportAirportId}`
      : ``;
    paramString += finalAirportId
      ? `, @finalAirportId = ${finalAirportId}`
      : ``;
    paramString += departureTime ? `, @departureTime = ${departureTime}` : ``;
    paramString += arrivalTime ? `, @arrivalTime = ${arrivalTime}` : ``;
    paramString += transitTime ? `, @transitTime = ${transitTime}` : ``;

    const flightSchedule = await sequelize.query(
      `SP_UpdateFlightSchedule ${paramString}`,
      {
        type: QueryTypes.UPDATE,
      },
    );
    return flightSchedule;
  } catch (error) {
    console.error(error);
  }
};
