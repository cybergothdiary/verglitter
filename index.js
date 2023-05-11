// Ver Glitter
// Multifunctional & modern platform disposing structured data as well as reviews for worldwide cosmetics brand.

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const path = require('path');

// $$$ Joi Validation
const Joi = require('joi');
const { productSchema } = require('./utils/joiSchemas');
const { validateProduct } = require('./utils/validators');

// $$$ Error Classes & Catch
const AppError = require('./utils/appError');
const catchAsync = require('./utils/catchAsync');

// $$$ Express App Initialization
const app = express();

// $$$ MongoDB Connecting
mongoose.connect('mongodb://127.0.0.1:27017/verglitter')
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
    res.locals.pageTitle = 'Ver Glitter';
    next();
})

// ***** Routing *****

app.get(['/', '/brands'], catchAsync(async (req, res) => {
    const brands = await Brand.find({});
    res.render('index', {brands});
}));

app.get('/brands/:shortName', catchAsync(async (req, res) => {
    const isPresented = await Brand.findOne({short: req.params.shortName}).populate('products');
    if (isPresented) {
        res.render('brand', {brand: isPresented, pageTitle: isPresented.name});
    } else {
        res.redirect('/');
    }
}));

app.get('/brands/:shortName/add', catchAsync(async (req, res) => {
    const isPresented = await Brand.findOne({short: req.params.shortName});
    if (isPresented) {
        res.render('products/add', {brand: isPresented, pageTitle: 'New product'});
    } else {
        res.redirect('/');
    }
}));

app.post('/brands/:shortName', validateProduct, catchAsync(async (req, res) => {
    const product = new Product(req.body.product);
    const brand = await Brand.findOne({short: req.params.shortName});
    brand.products.push(product);
    product.brand = brand;
    await brand.save();
    await product.save();
    res.redirect(`/brands/${req.params.shortName}/${product._id}`); // Should redirect to just created product page
}));

app.get('/brands/:shortName/:productId', catchAsync(async (req, res) => {
    const product = await Product.findById(req.params.productId).populate('brand');
    res.render('products/product', {product, pageTitle: product.name});
}));

app.put('/brands/:shortName/:productId', validateProduct, catchAsync(async (req, res) => {
    const { shortName, productId } = req.params;
    await Product.findByIdAndUpdate(productId, req.body.product);
    res.redirect(`/brands/${shortName}/${productId}`);
}));

app.delete('/brands/:shortName/:productId', catchAsync(async (req, res) => {
    const { shortName, productId } = req.params;
    await Product.findByIdAndDelete(productId);
    await Brand.findOneAndUpdate({short: shortName}, {$pull: {products: productId}});
    res.redirect(`/brands/${req.params.shortName}`);
}));

app.get('/brands/:shortName/:productId/edit', catchAsync(async (req, res) => {
    const product = await Product.findById(req.params.productId).populate('brand');
    res.render('products/edit', {product, pageTitle: product.name});
}));

app.all('*', (req, res, next) => {
    throw new AppError(404, 'Not Found')
})

app.use((err, req, res, next) => {
    if(!err.status) err.status = 500;
    if(!err.message) err.message = 'Something Went Wrong.'
    res.status(err.status).render('error', {status: err.status, name: err.name, message: err.message, pageTitle: `${err.status}: ${err.name}`});
})

app.use((err, req, res, next) => {
    console.log('Async error was just detected!', err);
})

app.listen(3000, () => {
    console.log('VerGlitter: Server is running on // localhost //')
});