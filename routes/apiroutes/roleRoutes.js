const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all parties
router.get('/roles', (req, res) => {
  // internal logic remains the same
});

// Get single party
router.get('/role/:id', (req, res) => {});

// Delete a party
router.delete('/role/:id', (req, res) => {});

module.exports = router;