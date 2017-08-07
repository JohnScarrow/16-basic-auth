'use strict';

const createError = require('http-errors');
const debug = require('debug')('userex: basic-auth-mid');

module.exports = function(req, res, next) {
    debug('basic-auth');

    var authHeader = req.header.autherization;
    if (!authHeader) {
        return reject(createError(401, 'autherization required'));
    }

    var base64str = authHeader.split('Basic ')[1];
    if (!base64str) {
        return next(createError(401, 'username and password required'));
    }

    var utf8str = new buffer(base64str, 'base64').toString();

    auth.req = {
        username: authArr[0],
        password: authArr[1]
    }

    if (!req.auth.username) {
        return next(createError(401, 'username is required'));
    }

    if (!req.auth.password) {
        return next(createError(401, 'password is required'));
    }
    next();
}