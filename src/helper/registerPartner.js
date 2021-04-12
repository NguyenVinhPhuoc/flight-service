import { QueryTypes } from 'sequelize';
import sequelize from '../config/dbconfig';

export default async function registerPartner(
  partnerName,
  partnerEmail,
  logoUrl,
  presenterName,
  presenterEmail,
  presenterPhoneNumber,
) {
  try {
    const paramString = `@partnerName = '${partnerName}', @partnerEmail = '${partnerEmail}', @logoUrl='${logoUrl}', @presenterName = '${presenterName}', @presenterEmail = '${presenterEmail}', @presenterPhoneNumber = '${presenterPhoneNumber}'`;
    await sequelize.query(`SP_RegisterPartner ${paramString}`, {
      type: QueryTypes.INSERT,
    });
  } catch (error) {
    console.error(error);
  }
}
