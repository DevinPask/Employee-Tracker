const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all parties
router.get('/departments', (req, res) => {
  // internal logic remains the same
});

// Get single party
router.get('/department/:id', (req, res) => {});

// Delete a party
router.delete('/department/:id', (req, res) => {});

module.exports = router;