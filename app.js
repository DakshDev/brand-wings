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

const __dirname = import.meta.dirname

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
