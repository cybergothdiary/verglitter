const Joi = require('Joi');
const { productSchema } = require('./joiSchemas');

const validateProduct = (req, res, next) => {
    const {error} = productSchema.validate(req.body);
    if (error) {
        console.log('An error during validation!', error)
    } else {
        console.log('Successfully!', req.body);
    }
}

module.exports = { validateProduct };