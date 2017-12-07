module.exports = {

   mongoUri: 'mongodb://localhost:27017/project',
    // or use 
     //mongoUri: 'mongodb://admin:password@localhost:27017/project',
    debug: true,
    sessionSecret: 'dev_secret_key',
    
    google: {
      clientID: '41917947091-4o86i624dap6keumdfq1o222c4331f7e.apps.googleusercontent.com',
      clientSecret: 'aLLvyJZrG8ua1UEnX81-qKBu',
      callbackURL: 'http://localhost:3000/oauth/google/callback'
}

}