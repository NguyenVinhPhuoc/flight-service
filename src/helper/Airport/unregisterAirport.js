const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/dbconfig');

module.exports = async function (id) {
  try {
    const airport = await sequelize.query(`SP_UnregisterAirport ${id}`);
    return airport;
  } catch (error) {
    console.error(error);
  }
};
