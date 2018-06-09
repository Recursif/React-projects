
const config = require('../../../config/config')
const stripe = require('stripe')(config.stripe_secret_key)




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

  // Begin Stripe Connect setup
  app.post('/api/stripe/account/get', function (req, res, next) {
    const country = req.body.countryCode;

    const email = 'me@keithweaver.ca'

    if (
      country !== 'CA' &&
      country !== 'US'
    ) {
      res.send({
        success: false,
        message: 'Error: Invalid country',
      })
    } else {

    }

    stripe.accounts.create({
      type: 'custom',
      country,
      email
    }, function(err, account) {
      if (err) {
        console.log('err', err);
        res.send({
          success: false,
          message: 'Error',
        })
      } else {
        console.log('account', account);
      }
    })
  });
};
