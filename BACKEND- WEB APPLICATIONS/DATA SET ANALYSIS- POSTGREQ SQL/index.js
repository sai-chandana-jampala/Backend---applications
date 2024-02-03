const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/saichandana'); // Removed deprecated options

const dataSchema = new mongoose.Schema({
  end_year: { type: String }, // Adjust types as needed
  intensity: { type: Number },
  sector: { type: String },
  // Add other fields as needed
});

const Data = mongoose.model('Data', dataSchema);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Log all data during startup
mongoose.connection.once('open', async () => {
  try {
    const allData = await Data.find({});
    console.log('All data in MongoDB:', allData);
  } catch (error) {
    console.error('Error fetching all data during startup:', error);
  }
});

app.get('/api/data', async (req, res) => {
  try {
    console.log('Fetching all data from MongoDB...');
    const result = await Data.find({});
    console.log('Data found:', result); // Log retrieved data
    res.json(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.get('/2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});
app.get('/1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index1.html'));
});
app.get('/3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index3.html'));
});
app.get('/4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index4.html'));
});
app.get('/5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index5.html'));
});
app.get('/6', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index6.html'));
});
app.get('/7', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index7.html'));
});
app.get('/8', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index8.html'));
});
app.get('/9', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index9.html'));
});
app.get('/10', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index10.html'));
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
