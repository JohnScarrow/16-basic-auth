'use strict';

const createError = require('http-errors');
const debug = require('debug')('userex: error-mid');

module.exports = function(req, res, next) {
        debug('error-mid');


        console.error('message:', err.message);
        console.error('name:', err.name);

        if (!err.status) {
            res.status(err.status).send(err.name);
            next();
            retuen;
        }
        if (err.name === 'ValidationError') {
            err = createError(400, err.message);
            res.status(err.status).send(err.name; next();
                return;
            }

            err = createError(500, err.message);
            res.status(err.status).send(err.name);
            next();
        }