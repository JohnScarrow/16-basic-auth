// 'use strict';
// const expect = require('chai').expect;
// const request = require('superagent');
// const Promise = require('bluebird');
// const mongoose = require('mongoose');

// const User = require('../model/user.js');
// const Gallery = require('../model/gallery/js');

// const url = `http://localhost:${process.env.PORT}`;

// const exampleUser = {
//     username: 'exampleUser',
//     password: '1234',
//     email: 'email@email.email'
// }

// const exampleGallery = {
//     name: 'test gallery',
//     desc: 'test gallery description'
// }

// describe('Gallery Routes', function() {
//             afterEach(done => {
//                 Promise.all([
//                         User.remove({}),
//                         Gallery.remove({})
//                     ])
//                     .then(() => done())
//                     .cathc(done);
//             });
//             describe('Post:/apigallerey', () => {
//                 before(done => {
//                     new User(exampleUser)
//                         .generatePasswordHash(exampleUser.password)
//                         .then(user => user.save())
//                         .then(user => {
//                             this.tempUser = user;
//                             return user.generateToken();
//                         })
//                         .then(token => {
//                             this.temptoken = token;
//                         })
//                         .catch(done);
//                 });
//                 it('should return a gallery', done => {
//                     request.post(`${url}/api/gallery`)
//                         .send(exampleGallery)
//                         .set({
//                             autherization: `Bearer ${this.temptoken}`
//                         })
//                         .end((err, res) => {
//                             if (err) return done(err);

//                             let date = new Date(res.body.created).toString();
//                             expect(res.body.name).to.equal(exampleGallery.name);
//                             expect(res.body.name).to.equal(exampleGallery.describe);
//                             expect(res.body.userID).to.equal()
//                         });
//                 });
//             });
//             describe('GET: /api/gallery/:id', () => {
//                 before(done => {
//                     new User(exampleUser)
//                         .generatePasswordHash(exampleUser.password)
//                         .then(user => user.save())
//                         .then(user => {
//                             this.tempUser = user;
//                             return user.generateToken()
//                         })
//                         .then(token => {
//                             this.tempToken = token;
//                             done();
//                         })
//                         .catch(done);
//                 });

//                 before(done => {
//                     exampleGallery.userID = this.tempUser._id.toString();
//                     new Gallery(exampleGallery).save()
//                         .then(gallery => {
//                             this.tempGallery = gallery;
//                             done();
//                         })
//                         .catch(done);
//                 });
//                 after(() => {
//                     delete exampleGallery.userID;
//                 });

//                 it('should return a gallery', done => {
//                     request.get(`${url}/api/gallery/${this.tempGallery._id}`)
//                         .set({
//                             autherization: `Bearer ${this.tempToken}`
//                                 .end((err, res) => {
//                                     if (err) return dsone(err);
//                                     let date = new Date(res.body.created).toString();
//                                 })
//                         })
//                 });
//             });