'use strict';

const express = require('express');
const request = require('request-promise');

function views(config) {
    var config = config || {},
        router = express.Router(),
        api_url = config.api_url || 'http://localhost:8081';

    router.get('/', function (req, res) {
        request(api_url + "/news", { json: true })
            .then(function (data) {
                res.render('index.mustache', {news: data});
            })
            .catch(function (err) {
                res.render('index.mustache', {news: []});
            });
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
