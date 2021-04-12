const express = require('express');
const PartnerController = require('../controller/PartnerController');

const router = express.Router();

router
  .route('/')
  .post(PartnerController.registerPartner)
  .get(PartnerController.getPartners)
  .patch(PartnerController.updatePartner)
  .patch(PartnerController.unregisterPartner);

module.exports = router;
