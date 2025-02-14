const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors')
app.use(cors());

require('./db/connection');
const Users = require('./models/User.js');

app.post('/', async(req, res) => {
    try {
        const user = new Users(req.body);
        const result = await user.save();
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

// New GET endpoint to fetch all users
app.get('/users', async(req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});