module.exports = {
  //  mongoUri: 'mongodb://ds133496.mlab.com:33496/swaaap',
      mongoUri: 'mongodb://admin:admin@ds133496.mlab.com:33496/swaaap',
      debug: true,
      sessionSecret: 'dev_secret_key',
  
      google: {
        clientID: '41917947091-4o86i624dap6keumdfq1o222c4331f7e.apps.googleusercontent.com',
        clientSecret: 'aLLvyJZrG8ua1UEnX81-qKBu',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
      },
      facebook: {
        clientID: '378030279305267',
        clientSecret: '6eef122c8309dc308250da794d696bbb',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
      }
  }
  