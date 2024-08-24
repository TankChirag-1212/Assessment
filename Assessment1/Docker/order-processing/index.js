const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
    user: '<database-user>',
    host: 'postgres-container',
    database: '<dtabase-name>',
    password: '<database-password>',
    port: 5432,
});

app.get('/', (req, res) => {
    res.send('Hello from Backend');
});

app.get('/data', async (req, res) => {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    res.send(result.rows);
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
