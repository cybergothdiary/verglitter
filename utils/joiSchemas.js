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

module.exports = { productSchema };