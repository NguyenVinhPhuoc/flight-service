import { QueryTypes } from 'sequelize';
import sequelize from '../config/dbconfig';

export default async function getPartners(id = null, partnerName = null) {
  try {
    if (id === null && partnerName === null) {
      const partners = await sequelize.query(`SP_GetPartners`, {
        type: QueryTypes.SELECT,
      });
      return partners;
    }
    const paramString = `@id = '${id}', @partnerName = '${partnerName}' `;
    const partners = await sequelize.query(`SP_GetPartners ${paramString}`, {
      type: QueryTypes.SELECT,
    });
    return partners;
  } catch (error) {
    console.error(error);
  }
}
