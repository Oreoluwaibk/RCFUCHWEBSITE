const Joi = require("joi");

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(8)
        .max(35)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

})

module.exports = schema;