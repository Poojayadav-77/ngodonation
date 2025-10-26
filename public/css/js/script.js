const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/history', (req, res) => {
  res.render('history');
});

// Handle login form
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // For now, simple check
  if(username === "admin" && password === "admin") {
    res.send("Login successful!");
  } else {
    res.send("Invalid credentials!");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
