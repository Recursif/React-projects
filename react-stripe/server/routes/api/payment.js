
const config = require('../../../config/config')

module.exports = (app) => {
  // Returns the fields needed.
  app.post('/api/stripe/account/get', function (req, res, next) {
      const stripeAccountId = 'test';

      if (!stripeAccountId) {
        res.send({
          "success": false,
          "message": 'Missing stripe account.',
          "setupBegan": false,
        })
      } else {
        res.send({
          "success": true,
          "message": 'Stripe account.',
          "setupBegan": true,
        })
      }
  });
};
