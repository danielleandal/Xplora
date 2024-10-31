const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const PORT = 5000;

const url = 'mongodb+srv://xplora-user:FriendersTeam10!@xplora.u95ur.mongodb.net/?retryWrites=true&w=majority&appName=Xplora';
const client = new MongoClient(url);
client.connect();

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.post('/api/login', async (req, res, next) => {
    let error = '';
    const { email, password } = req.body;

    try {
        const db = client.db('xplora');

        const results = await db.collection('users').findOne(
            { email: email, password: password }
        );

        if (results) {
            const { _id: id, first_name: firstName, last_name: lastName } = results;
            res.status(200).json({ id, firstName, lastName, error: '' });
        } else {
            error = 'Invalid login or password';
            res.status(401).json({ error });
        }
    } catch (err) {
        error = 'An error occurred while accessing the database';
        res.status(500).json({ error });
    }
});

app.post('/api/register', async (req, res, next) => {
    let error = '';
    const { firstName, lastName, email, password } = req.body;

    try {
        const db = client.db('xplora');

        const results = await db.collection('users').findOne(
            { email: email, password: password }
        );

        if (!results) {
            const newUser = {
                first_name,
                last_name,
                email,
                password,
            };

            const result = await db.insertOne(newUser);
            message = 'User added successfully';
            res.status(201).json({ message: message });
        } else {
            error = 'Email already exists';
            res.status(401).json({ error });
        }
    } catch (err) {
        error = 'An error occurred while accessing the database';
        res.status(500).json({ error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});