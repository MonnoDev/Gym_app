const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config();

const port = process.env.PORT || 8080;
const URI = process.env.DB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient(URI);

app.get('/users', async (req, res) => {
  try {
    const { order } = req.query;
    const con = await client.connect();
    const sortQuery = { fname: order === 'desc' ? 1 : -1 };
    const data = await con
      .db(dbName)
      .collection('Users')
      .aggregate([
        {
          $lookup: {
            from: 'Services',
            localField: 'service_id',
            foreignField: '_id',
            as: 'info',
          },
        },
        { $sort: sortQuery },
      ])
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { order } = req.query;
    const con = await client.connect();
    const sortQuery = { fname: order === 'desc' ? 1 : -1 };
    const data = await con
      .db(dbName)
      .collection('Users')
      .aggregate([
        {
          $match: { _id: new ObjectId(id) },
        },
        {
          $lookup: {
            from: 'Services',
            localField: 'service_id',
            foreignField: '_id',
            as: 'info',
          },
        },
        { $sort: sortQuery },
      ])
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/memberships', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db(dbName).collection('Services').find().toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get('/memberships/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const con = await client.connect();
    const membership = await con
      .db(dbName)
      .collection('Services')
      .findOne({ _id: new ObjectId(id) });
    await con.close();

    if (membership) {
      res.send(membership);
    } else {
      res.status(404).send({ message: 'Membership not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/users/:order', async (req, res) => {
  try {
    const { order } = req.params;
    const con = await client.connect();
    const sortQuery = { fname: order === 'asc' ? -1 : 1 };
    const data = await con
      .db(dbName)
      .collection('Users')
      .aggregate([
        {
          $lookup: {
            from: 'Services',
            localField: 'service_id',
            foreignField: '_id',
            as: 'info',
          },
        },
        { $sort: sortQuery },
      ])
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/memberships/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('Services')
      .deleteOne({ _id: new ObjectId(id) });
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('Users')
      .deleteOne({ _id: new ObjectId(id) });
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/memberships', async (req, res) => {
  try {
    const newService = req.body;
    const con = await client.connect();
    const result = await con
      .db(dbName)
      .collection('Services')
      .insertOne(newService);
    await con.close();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/users', async (req, res) => {
  try {
    const newUser = req.body;
    newUser.service_id = new ObjectId(newUser.service_id);
    const con = await client.connect();
    const db = con.db(dbName);
    const result = await db.collection('Users').insertOne(newUser);
    const createdUser = await db.collection('Users').findOne({ _id: result.insertedId });
    await con.close();
    res.status(201).send(createdUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
