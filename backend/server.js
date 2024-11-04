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

//Log In API
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

//Register API
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
                firstName,
                lastName,
                email,
                password,
            };

            const result = await db.collection('users').insertOne(newUser);
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

//Trips API
app.post('/api/trips', async (req, res, next) => {
    let error = '';
    const { name, tripName, destination, startDate, endDate, imageUrl } = req.body;

    try {
        const db = client.db('xplora');
        const existingTrip = await db.collection('trips').findOne({ name: name });

        if (existingTrip) {
            
            const { _id: id, tripName, destination, startDate, endDate, imageUrl } = existingTrip;
            const message = 'Trip already exists';
            res.status(200).json({ message, id, tripName, destination, startDate, endDate, imageUrl });
        } else {

            const newTrip = {
                tripName,
                destination,
                startDate,
                endDate,
                description: '',
                imageUrl,
            };

            const result = await db.collection('trips').insertOne(newTrip);
            const message = 'Trip added successfully';
            res.status(201).json({ message, id: result.insertedId });
        }

    } catch (err) {
        error = 'An error occurred while accessing the database';
        res.status(500).json({ error });
    }
});

// Add activities API
// app.post('/api/trips/activities', async (req, res, next) => {
//     let error = '';
//     const { tripId, name, date, time, location, description} = req.body;

//     try{
//         const db = client.db('xplora');
//         const existingActivity = await db.collection('activities').findOne({ tripId: tripId, name
//     });

//     }catch (err) {
//         error = 'An error occurred while accessing the database';
//         res.status(500).json({ error });
//     }



// });




// WRITE EVERYTHING ABOVE THESE LINES

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

