// api.js

const express = require('express');
const router = express.Router();
const db = require('./db'); // Import database connection

// Now you can use db.query in your route handlers
router.get('/tshirts', (req, res) => {
  db.query('SELECT * FROM t_shirts', (err, results) => {
    if (err) {
      console.error('Error fetching t-shirts:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Other route handlers...

module.exports = router;
