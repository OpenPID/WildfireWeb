'use strict';

const express = require('express');

function views(config) {
    var config = config || {},
        router = express.Router();

    router.get('/', function (req, res) {
        res.render('index.mustache');
    });

    router.get('/signup', function (req, res) {
        res.render('signup.mustache');
    });

    router.get('/unsubscribe', function (req, res) {
        res.render('unsubscribe.mustache');
    });

    return router;
}

module.exports = views;
