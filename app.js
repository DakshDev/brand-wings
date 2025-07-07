import express from 'express';
import path from 'path';
import { generateSitemap } from './utils/sitemapGenetor.js';
import nodemailer from "nodemailer"
import bodyParser from 'body-parser';
const __dirname = import.meta.dirname

const app = express();

const pages = [
  '/',            // Home
  '/about',       // About page
  '/services',    // Your services
  '/contact',     // Contact form
  '/portfolio',   // Example page
  // Add all static or SEO-worthy pages
];

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
// Set view engine
app.set('view engine', 'ejs');

app.get('/sitemap.xml', (req, res) => {
  const domain = 'https://brandwings.online';  // Change to your real domain
  const xml = generateSitemap(domain, pages);
  res.header('Content-Type', 'application/xml');
  res.send(xml);
});

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

app.post("/subscribe",async(req,res)=>{
  const {email} = req.body

    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ameenhamza222@gmail.com',    
      pass: 'wjsjegnltbyyuknv',          
    },
  });

  const mailOptions = {
    from: 'Brand Wings',
    to: 'ameenhamza222@gmail.com',
    subject: 'New Subscriber',
    text: `New user subscribed with email: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});



// Start server
app.listen(3000, () => console.log('Live...'));