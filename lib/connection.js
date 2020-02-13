'use strict'

var nforce = require('nforce');

var org = nforce.createConnection({
  clientId: '3MVG9n_HvETGhr3Bq6pi1dYA.gXaPDJlYQafMbp2JkLLL_UsV_VAoqQcU_fIq3RruGji2o9im_iAcc86vMdxI',
  clientSecret: 'F0C5811B023A4472B35893D3327D74297DCD689A4111B7B7AA5B25342BD8EACF',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  environment: 'production',
  mode: 'single'
});

org.authenticate({ username: 'umer.farooq-25cc@force.com', password: 'Admin@123he8So7gxY8tBh3ADlSqQwDT3t'}, function(err, resp){
  // the oauth object was stored in the connection object
  if(!err) console.log('Successfully connected to Salesforce. Cached token: ' + org.oauth.access_token);
  if(err) console.log('Cannot connect to Salesforce: ' + err);
});

module.exports = org;
