import { QueryTypes } from 'sequelize';
import sequelize from '../config/dbconfig';

export default async function registerPartner(
  id,
  partnerName = null,
  partnerNewName = null,
  partnerEmail = null,
  logoUrl = null,
  presenterName = null,
  presenterEmail = null,
  presenterPhoneNumber = null,
) {
  try {
    let paramString = `@id  = '${id}'`;
    paramString += partnerName ? `, @partnerName = '${partnerName}'` : ``;
    paramString += partnerNewName
      ? `, @partnerNewName = '${partnerNewName}'`
      : ``;
    paramString += partnerEmail ? `, @partnerEmail = '${partnerEmail}'` : ``;
    paramString += logoUrl ? `, @logoUrl = '${logoUrl}'` : ``;
    paramString += presenterName ? `, @presenterName = '${presenterName}'` : ``;
    paramString += presenterEmail
      ? `, @presenterEmail = '${presenterEmail}'`
      : ``;
    paramString += presenterPhoneNumber
      ? `, @presenterPhoneNumber = '${presenterPhoneNumber}'`
      : ``;

    const partner = await sequelize.query(
      `SP_UpdatePartnerInformation ${paramString}`,
      {
        type: QueryTypes.UPDATE,
      },
    );
    return partner;
  } catch (error) {
    console.error(error);
  }
}
