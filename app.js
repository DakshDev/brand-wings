// import express from "express";
// import path from "path";


// const app = express();

// app.use(express.static(path.join(import.meta.dirname, "public")))
// app.set('view engine', 'ejs');
// app.set('views', './views');


// app.get("/", (req, res) => {
//     res.render("./views/home.html")
// })


// app.listen(3000, () => console.log("Live...")) 


import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('home'); // renders views/home.ejs
});

// Start server
app.listen(3000, () => console.log('Live...'));
