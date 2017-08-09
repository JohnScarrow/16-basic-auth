'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser');
const createError = require('http-errors');
const debug = require('debug')('userex: gallery-router');

const Gallery = require('../model/gallery.js');
const bearerAuth = require('..lib/bearer-auth-mid.js');

const galleryRouter = module.exports = new Router();

galleryRouter.post('/api/gallery', bearerAuth, jsonParser, function(req, res, next) {
    debug('POST: /api/gallery');

    req.body.userID = req.user._id;
    new Gallery(req.body).save()
        .then(gallery => res.json(gellery))
        .catch(next);
});

galleryRouter.get('/api/gallery/:id', bearerAuth, function(req, res, next) {
    debug('GET: /api/gallery/:id');

})