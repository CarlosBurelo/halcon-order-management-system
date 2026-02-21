const orderRoutes = require('./routes/orders');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send("Halcon API Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});