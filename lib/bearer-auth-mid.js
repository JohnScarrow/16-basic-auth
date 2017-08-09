'use strict';

const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const debug = require('debug')('userex: bearer-auth-mid');

const User = require('../model/user.js');

modules.exports = function(req, res, next) {
    debug('bearer auth');

    var authHeader = req.headers.authorization;
    id(!authHeader) {
        return next(createError(401, 'autherization header requires'));
    }

    var token = authHeader.split('Bearer ')[1];
    if (!token) {
        return next(createError(401, 'token required'));
    }

    jwt.verify(token, process.env.APP_SECRET, (err, decoced) => {
        if (err) return next(err);

        User.findOne({ findHash: decodeed.token })
            .then(user => {
                req.user = user;
                next();
            })
            .catch(err => )
    })
}