const Joi = require('joi');

const productSchema = new Joi.object({
    product: Joi.object({
        name: Joi.string().required(),
        itemType: Joi.string().valid('Eyeliner', 'Pomade', 'Cream'),
        skinType: Joi.string().valid('All', 'Normal', 'Sensitive', 'Combinated'),
        color: Joi.string().required(),
        imageUrl: Joi.string().required(),
        finishType: Joi.string().required(),
        volume: Joi.string().required(),
        commercial: Joi.string().required(),
        description: Joi.string().optional().allow(''),
        ingredients: Joi.string().required()
    })
});

const reviewSchema = new Joi.object({
    review: Joi.object({
        rating: Joi.number().integer().min(1).max(5).required(),
        headline: Joi.string().max(50).required(),
        content: Joi.string().required()
    })
});

module.exports = { productSchema, reviewSchema };