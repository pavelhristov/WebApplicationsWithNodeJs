'use strict';


const express = require("express");



module.exports = function({ app, data }) {
    const authController = require('../controllers/auth-controller')({ data }),
        userController = require('../controllers/user-controller')({ data }),
        auth = require('../middlewares/auth-middleware'),
        passport = require('passport');

    const router = express.Router();

    router
        .get('/home', userController.getHome)
        .get('/login', userController.getLogin)
        .post('/login', authController.loginLocal)
        // passport.authenticate("local", { failureRedirect: "/auth/sign-in" }),
        // (req, res) => res.redirect("/home"))
        .get('/logout', authController.logout)
        .get('/register', userController.getRegister)
        .post('/register', authController.register)
        .get('/profile', auth.isAuthenticated, userController.getProfile)
        .get('/unauthorized', userController.getUnauthorized)
        .get('/', (req, res) => { res.redirect("/home"); });

    app.use(router);
};