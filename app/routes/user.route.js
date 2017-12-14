const passport = require('passport');
const user = require('../controllers/user.controller');

module.exports = (app) => {
    const path = '/api/user';
    app





    app.get(path + '/getuser', user.getUsers);
    app.post(path + '/signup', user.create);
    app.put(path + '/editprofile', user.edit);
    app.route('/login')
        .get(user.login)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true,

        }));

    app.post('/logout', user.logout);

    app.get('/oauth/google', passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
        failureRedirect: '/login'
    }));

    app.get('/oauth/google/callback', passport.authenticate('google', {
        failureRedirect: '/login',
        successRedirect: '/home'
    }));

    app.get('/oauth/facebook', passport.authenticate('facebook', {
          scope: ['public_profile', 'email'],
          failureRedirect: '/login'
    }));

    app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
          failureRedirect: '/login',
          successRedirect: '/home'
    }));
}
