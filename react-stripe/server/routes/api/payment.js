
const config = require('../../../config/config')

module.exports = (app) => {
  // Returns the fields needed.
  app.post('/api/stripe/account/get', function (req, res, next) {
      const stripeAccountId = '';

      if (!stripeAccountId) {
        res.send({
          success: true,
          message: 'Missing stripe account.',
          setupBegan: false,
        })
      }
  });
};
