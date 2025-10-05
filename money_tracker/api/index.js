const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ body: 'test ok' });
});

app.post('/api/transaction', (req,res) => {
    res.json(req.body)
});

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});