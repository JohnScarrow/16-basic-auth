'use strict';

const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const createError = require('http-errors');
const Promise = require('bluebird');
const debug = require('debug')('cfgram:user');

const Schema = mongoose.Schema;

const userSchema = Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    findHash: { type: String, unique: true }
});

userSchema.methods.generatePasswordHash = function(password) {
    debug('generate password hash');

    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, (err, valid) => {
            if (err) return reject(err);
            if (!valid) return reject(createError(401, 'invalid password'));
            resolve(this);
        });
    });
}

userSchema.methods.generateFindHash() {
    debug('Genereate Find Hash');

    return new Promise((resolve, reject) => {
        this.generateFindHash()
            .then(findHash => resolve(jwt.sign({ token: findHash }, process.env.APP_SECRET)))
            .catch(err => (err));
    });
}

module.exports = mongoose.model('user', userSchema);