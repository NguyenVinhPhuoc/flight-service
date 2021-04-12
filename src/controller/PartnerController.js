const registerPartner = require('../helper/registerPartner');
const getPartners = require('../helper/getPartners');
const updatePartner = require('../helper/updatePartner');
const unregisterPartner = require('../helper/unregisterPartner');

class PartnerController {
  //[POST] /api/v1/partners/registerPartner
  static async registerPartner(req, res) {
    const {
      partnerName,
      partnerEmail,
      transportType,
      logoUrl,
      presenterName,
      presenterEmail,
      presenterPhoneNumber,
    } = req.body;
    try {
      await registerPartner(
        partnerName,
        partnerEmail,
        transportType,
        logoUrl,
        presenterName,
        presenterEmail,
        presenterPhoneNumber,
      );

      return res.status(200).json({
        message: `Registered partner ${partnerName} successfully!`,
      });
    } catch (error) {
      console.error(error);
    }
  }

  //[GET] /api/v1/partners/getPartners
  static async getPartners(req, res) {
    try {
      const { id, partnerName } = req.query;
      const partners = await getPartners(id, partnerName);
      res.status(200).json({ partners });
    } catch (error) {
      console.error(error);
    }
  }

  static async updatePartner(req, res) {
    try {
      const {
        id,
        partnerName,
        partnerNewName,
        partnerEmail,
        logoUrl,
        presenterName,
        presenterEmail,
        presenterPhoneNumber,
      } = req.query;
      const partner = await updatePartner(
        id,
        partnerName,
        partnerNewName,
        partnerEmail,
        logoUrl,
        presenterName,
        presenterEmail,
        presenterPhoneNumber,
      );

      res.status(200).json({
        message: `Updated partner ${partner} successfully!`,
      });
    } catch (error) {
      console.error(error);
    }
  }

  static async unregisterPartner(req, res) {
    try {
      const { id, partnerName } = req.query;
      await unregisterPartner(id, partnerName);
      res.status(200).json({
        message: `Unregister ${partnerName} successfully!`,
      });
    } catch (error) {}
  }
}

module.exports = PartnerController;
