const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
    const { invoice_number, customer_id, delivery_address, notes } = req.body;

    const result = await pool.query(
        'INSERT INTO orders (invoice_number, customer_id, delivery_address, notes) VALUES ($1,$2,$3,$4) RETURNING *',
        [invoice_number, customer_id, delivery_address, notes]
    );

    res.json(result.rows[0]);
});

router.get('/', async (req, res) => {
    const result = await pool.query(
        'SELECT * FROM orders WHERE is_deleted = FALSE'
    );

    res.json(result.rows);
});

module.exports = router;