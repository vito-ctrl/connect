const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors());

require('./db/connection');
const Users = require('./models/User.js');

// Middleware to limit message length
app.use((req, res, next) => {
    if (req.body.message && req.body.message.length > 200) {
        return res.status(400).json({ error: "Message is too long. Maximum 200 characters allowed." });
    }
    next();
});


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

// Delete a message
app.delete('/users/:id', async (req, res) => {
    try {
        const result = await Users.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});