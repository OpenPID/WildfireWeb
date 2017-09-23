'use strict';

const express = require('express');

function views(config) {
    var config = config || {},
        router = express.Router();

    router.get('/', function (req, res) {
        res.render('index.mustache');
    });

    router.get('/signup', function (req, res) {
        res.render('signup.mustache', {
            title: 'Signup'
        });
    });

    router.get('/unsubscribe', function (req, res) {
        res.render('unsubscribe.mustache', {
            title: 'Unsubscribe'
        });
    });

    return router;
}

module.exports = views;
