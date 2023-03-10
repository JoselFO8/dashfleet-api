const { check } = require("express-validator");
const validateResults = require("../utils/handleValidators.js")

// Midelware - Validacion de datos

const ValidatorInserData = [
    check("clientId").exists().notEmpty(),
    check("deliveryAddress").exists().notEmpty(),
    check("products").exists().notEmpty(),
    check("deliveryStatus").exists().notEmpty(),
    check("deliverDate").exists().notEmpty(),
 
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = {ValidatorInserData}