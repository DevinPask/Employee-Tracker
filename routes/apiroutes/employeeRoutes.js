const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// originally app.get('/api/employee')
router.get('/employee', (req, res) => {
    // internal logic remains the same
  });
  
  // originally app.get('/api/candidate/:id')
  router.get('/employee/:id', (req, res) => {});
  
  // originally app.post('/api/candidate')
  router.post('/employee', ({ body }, res) => {});
  
  // originally app.put('/api/candidate/:id')
  router.put('/employee/:id', (req, res) => {});
  
  // originally app.delete('/api/candidate/:id')
  router.delete('/employee/:id', (req, res) => {});

  module.exports = router;
  