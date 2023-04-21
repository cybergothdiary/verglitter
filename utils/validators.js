const Joi = require('joi');
const AppError = require('./appError');
const { productSchema } = require('./joiSchemas');

const validateProduct = (req, res, next) => {
    const {error} = productSchema.validate(req.body);
    if (error) {
        throw new AppError(400, `${error.message}`, 'Validation Failed');
    } else {
        next();
    }
}

module.exports = { validateProduct };