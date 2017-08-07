'use script';

const express = require('express');
const debug = require('debug')('userex: server');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const err = require('./lib/err-mid.js');
const authRouter = require('./route/auth-route.js');

dotenv.load();

const PORT = process.env.PORT || 3000;
const app = express();
mongoose.connect(process.env.MONGODB_URI);

app.use(cors());
app.use(morgan('dev'));

app.use(authRouter);
app.use(err);

app.listen(PORT, () => {
    debug('running on PORT: ', PORT);
})