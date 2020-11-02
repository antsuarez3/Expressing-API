const express = require('express');
const chirpsRouter = require('./chirps');

let indexRouter = express.Router();

indexRouter.use('/chirps', chirpsRouter);

module.exports = indexRouter;