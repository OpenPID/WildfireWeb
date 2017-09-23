'use strict';

const express = require('express');

function views(config) {
    var config = config || {},
        router = express.Router();

    router.get('/', function (req, res) {
        res.render('index.html');
    });

    return router;
}

module.exports = views;
