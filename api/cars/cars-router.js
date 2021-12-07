const express = require('express');

const Cars = require('./cars-model');

const {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
} = require('./cars-middleware');

const router = express.Router();

module.exports = router;
