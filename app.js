import express from 'express';
import path from 'path';

const __dirname = import.meta.dirname

const app = express();

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');


// Routes
app.get('/', (req, res) => {
  res.render('home'); // renders views/home.ejs
});
app.get('/about', (req, res) => {
  res.render('about'); // Renders views/about.ejs
});

app.get('/contact', (req, res) => {
  res.render('contact'); // Renders views/about.ejs
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio'); // Renders views/services.ejs
});

app.get('/services', (req, res) => {
  res.render('services'); // Renders views/services.ejs
});


// Start server
app.listen(3000, () => console.log('Live...'));