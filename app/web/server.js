'use strict';

const logger = require('morgan');
const express = require('express');
const mustache = require('mustache-express');

const views = require('./views');


function init(config) {
    var config = config || {};
    const port = config.port || process.env.PORT || 8000;

    var app = express();

    // Basic setup
    app.use(logger('dev'));
    app.set('port', port);
    app.engine('mustache', mustache());
    app.set('view engine', 'mustache');

    // Views
    app.use('/', views());
    app.use('/static', express.static('static'));

    // Handlers
    app.use(error_handler);

    // Start listening
    app.listen(port);
    return app;
}

// Error handler
function error_handler(err, req, res, next) {
    console.error(err.stack);
    if (err.name == 'HttpError') {
        var status_code = err.status_code || 500;
        return res.status(status_code).json({
            'error': err.message,
            'status_code': status_code
        });
    }
    return next(err);
}

module.exports = init;
