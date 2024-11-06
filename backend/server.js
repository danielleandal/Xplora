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
        'GET, POST, PATCH, DELETE, OPTIONS, PUT'
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
    const { first_name, last_name, email, password } = req.body;

    try {
        const db = client.db('xplora');

        const results = await db.collection('users').findOne(
            { email: email }
        );

        if (!results) {
            const newUser = {
                first_name,
                last_name,
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

//TRIPS -- POST to add a new trip. 
app.post('/api/trips', async (req, res) => {
    const { user_id, name, city, start_date, end_date, notes, picture_url} = req.body;

    try {
        const db = client.db('xplora');

        const existingTrip = await db.collection('trips').findOne({
            user_id: MongoClient.ObjectId(user_id),
            name,
            city,
            start_date,
            end_date
        });
        if (existingTrip) {
            return res.status(409).json ({error: 'A similar trip already exists'});
        }
        
        const newTrip = {
            user_id: MongoClient.ObjectId(user_id),
            name,
            city,
            start_date,
            end_date,
            notes,
            picture_url,
        };
        
        const result = await db.collection('trips').insertOne(newTrip);
        res.status(201).json({ message: 'Trip added successfully', trip_id: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the trip' });
    }
});

//TRIPS -- GET to retrieve all trips in database
app.get('/api/trips', async (req, res) => {
    const { user_id, name, city, start_date, end_date, notes, picture_url} = req.body;

    try{
        const db = client.db('xplora');
        const trips = await db.collection('trips').find().toArray();
        res.json(trips);
        } catch (err) {
            res.status(500).json({ error: 'An error occurred while retrieving the trips' });
        }
});
  
//TRIPS -- PUT to update trip
app.put('/api/trips/:id', async (req, res) => {
    const { id } = req.params;
    const { name, city, start_date, end_date, notes, picture_url } = req.body;

    try {
        const db = client.db('xplora');
        const updatedTrip = {
            name,
            city,
            start_date,
            end_date,
            notes,
            picture_url,
        };

        const result = await db.collection('trips').updateOne(
            { _id: MongoClient.ObjectId(id) },
            { $set: updatedTrip }
        );

        if (result.matchedCount > 0) {
            res.status(200).json({ message: 'Trip updated successfully' });
        } else {
            res.status(404).json({ error: 'Trip not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the trip' });
    }
});

//TRIPS -- DELETE to remove a trip from db
app.delete('/api/trips/:id', async (req, res) => {
    const { id } = req.params;
 
    try {
        const db = client.db('xplora');
        const result = await db.collection('trips').deleteOne({ _id: MongoClient.ObjectId(id)});
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Trip deleted successfully' });
            } else {
                res.status(404).json({ error: 'Trip not found' });
            }
    }
    catch (error){
        res.status(500).json({ error: 'An error occured while deleting the trip'});
    }

});

//ACTIVITY -- POST an activity to a trip
app.post('/api/trips/:id/activities', async (req, res) => {
    const { id } = req.params;
    const {user_id, trip_id, name, date, time, location, notes} = req.body;


    try{
    const db = client.db('xplora');

    const existingActivity = await db.collection('activities').findOne({
        user_id: MongoClient.ObjectId(user_id),
        trip_id: MongoClient.ObjectId(trip_id),
        name,
        date,
        time,
        location,
        notes
    });
    if (existingActivity) {
        return res.status(409).json ({error: 'A similar activity already exists'});
    }

    const newActivity = {
        user_id: MongoClient.ObjectId(user_id),
        trip_id: MongoClient.ObjectId(trip_id),
        name,
        date,
        time,
        location,
        notes
    };
    
    const result = await db.collection('activities').insertOne(newActivity);
    res.status(201).json({ message: 'Activity added successfully', trip_id: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the activity' });
    }    
});

//ACTIVITY -- GET all activities in a trip
app.get('/api/trips/:id/activities', async (req, res) => {
    const { id } = req.params;
    try{
        const db = client.db('xplora');
        const activities = await db.collection('activities').find({trip_id: MongoClient.ObjectId(id)}).
        sort({date: 1}).toArray();
        res.json(activities);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching activities' });
        }
});

//ACTIVITY -- PUT to update an activity
app.put('/api/trips/:id/activities/:activityId', async (req, res) => {
    const { id, activityId } = req.params;
    const { name, date, time, location, notes } = req.body;

    try{
        const db = client.db('xplora');
        const result = await db.collection('activities').updateOne(
            {
                user_id: MongoClient.ObjectId(id),
                trip_id: MongoClient.ObjectId(id), 
                _id: MongoClient.ObjectId(activityId)
            },
            {
                $set: {
                    name,
                    date,
                    time,
                    location,
                    notes
                }
            }
        );
        if (result.matchedCount > 0){
            res.status(200).json({ message: 'Activity updated successfully' });
        }else{
            res.status(404).json({ error: 'Activity not found' });
        }        
    }
    catch(error){
        res.status(500).json({ error: 'An error occurred while updating the activity' });
    }
});

//ACTIVITY --DELETE to remove an activity
app.delete('/api/trips/:id/activities/:activityId', async (req, res) =>{
    const { id, activityId } = req.params;
    try{
        const db = client.db('xplora');
        const result = await db.collection('activities').deleteOne(
            {
                user_id: MongoClient.ObjectId(id),
                trip_id: MongoClient.ObjectId(id), 
                _id: MongoClient.ObjectId(activityId)
            });
            if (result.deletedCount > 0){
                res.status(200).json({ message: 'Activity deleted successfully' });
            } else{
                res.status(404).json({ error: 'Activity not found' });
            }
    }
    catch(error){
        res.status(500).json({ error: 'An error occurred while deleting the activity' });
    }
});


// WRITE EVERYTHING ABOVE THESE LINES

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

