// Import necessary modules
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
// Enable CORS for cross-origin resource sharing
app.use(cors());

// Connect to MongoDB using the Mongoose library
mongoose.connect('mongodb+srv://beniaridani:Daniel112.@cluster0.qj2ixge.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Define a new Mongoose schema for clients
const clientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});
// Create a new Mongoose model for clients based on the schema
const Client = mongoose.model("Client", clientSchema);


app.post('/cregister', async (req, res) => {
  try {
    // Check if the email already exists in the database
    const existingClient = await Client.findOne({ email: req.body.email });
    if (existingClient) {
      // If the email exists, send a 400 error response
      return res.status(400).send({ message: 'Email already exists' });
    }
    // If the email does not exist, create a new client in the database and send a success response
    const newClient = new Client(req.body);
    await newClient.save();
    res.status(201).send({ message: 'Client created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

// Handle POST requests to /cregister
app.post('/cregister', async (req, res) => {
  // Create a new client document with the data from the request body
  const newClient = new Client({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
  try {
    // Save the new client document to the database
    const savedClient = await newClient.save();
    // Send the saved client document as the response
    res.send(savedClient);
  } catch (error) {
    // If there was an error saving the client document, send a 500 error
    res.status(500).send(error);
  }
});
app.post('/login', async (req, res) => {
  try {
    // Check if the email already exists in the database
    const existingClient = await Client.findOne({ email: req.body.email });
    if (existingClient) {
      // If the email exists, send a 400 error response
      return res.render("/login");
    }
    // If the email does not exist, create a new client in the database and send a success response
   
    res.status(400).send({ message: 'doesnt exist' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

// Start the server listening on port 5000
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
