const { QueryTypes } = require('sequelize') ;
const sequelize = require( '../config/dbconfig');

module.exports =  async function unregisterPartner(id, name = null) {
  try {
    let paramString = `@id = '${id}'`;
    paramString += name ? `, @partnerName = ${name}` : ``;
    await sequelize.query(`SP_UnregisterPartner ${paramString}`, {
      type: QueryTypes.UPDATE,
    });
  } catch (error) {
    console.error(error);
  }
}
