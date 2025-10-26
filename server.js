const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const mongoose = require('mongoose');

const Donation = require('./models/donation.model');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = 'mongodb://127.0.0.1:27017/ngo-donations';

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// --- ROUTES ---

app.get('/', (req,res) => res.render('donate')); // your main donate page
app.get('/about', (req,res) => res.render('about'));
app.get('/login', (req,res) => res.render('login'));
app.get('/add-ngo', (req,res) => res.render('add-ngo'));

// List all donations
app.get('/history', async (req,res) => {
  const donations = await Donation.find().sort({ date: -1 });
  res.render('history', { donations });
});

// Add donation
app.post('/donations', async (req,res) => {
  const { donorName, email, amount, message } = req.body;
  await Donation.create({ donorName, email, amount, message });
  res.redirect('/history');
});

// Show edit form
app.get('/donations/:id/edit', async (req,res) => {
  const donation = await Donation.findById(req.params.id);
  res.render('edit-donation', { donation });
});

// Update donation
app.put('/donations/:id', async (req,res) => {
  const updates = req.body;
  await Donation.findByIdAndUpdate(req.params.id, updates, { runValidators: true });
  res.redirect('/history');
});

// Delete donation
app.delete('/donations/:id', async (req,res) => {
  await Donation.findByIdAndDelete(req.params.id);
  res.redirect('/history');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
