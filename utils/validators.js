const Joi = require('joi');
const AppError = require('./appError');
const { productSchema, reviewSchema } = require('./joiSchemas');

const validateProduct = (req, res, next) => {
    const {error} = productSchema.validate(req.body);
    if (error) {
        throw new AppError(400, `${error.message}`, 'Validation Failed');
    } else {
        next();
    }
};

const validateReview = (req, res, next) => {
    const {error} = reviewSchema.validate(req.body);
    if (error) {
        throw new AppError(400, `${error.message}`, 'Validation Failed');
    } else {
        next();
    }
};

module.exports = { validateProduct, validateReview };