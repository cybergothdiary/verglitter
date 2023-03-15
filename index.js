// H A B I B A T I | 
// Multifunctional & exclusive platform, disposing the most iconic and worshipped cosmetics reviews.

// https://99designs.com/profiles/1875373/designs/1513751

// Product Model <-> Review Model

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const path = require('path');
const joi = require('joi');

// $$$ Express Application Initialization
const app = express();

// $$$ Mongoose Connecting
mongoose.connect('mongodb://127.0.0.1:27017/habibati')
.then(() => console.log('MongoDB: Successfull connection completed'))
.catch((err) => console.log('MongoDB: Error occured', err));

const Brand = require('./models/Brand');
const Product = require('./models/Product');
const Review = require('./models/Review');

// $$$ View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.engine('ejs', ejsMate);

// $$$ Global Middlewares
app.use(express.static('static'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.locals.pageTitle = 'H A B I B A T I';
    next();
})

// ----- Routing 

app.get('/', async (req, res) => {
    const brands = await Brand.find({});
    res.render('index', {brands});
});

app.listen(3000, () => {
    console.log('HABIBATI APP: Server is running on // localhost //')
});