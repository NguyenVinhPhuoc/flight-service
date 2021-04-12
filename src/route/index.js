const partnerRoute = require('../route/partner');
const airportRoute = require('../route/airport');
const moduleName = require('../route/flightSchedule');

module.exports = function routes(app) {
  app.use('/api/v1/partners', partnerRoute);
  app.use('/api/v1/airports', airportRoute);
  app.use('/api/v1/flightSchedules');
};
