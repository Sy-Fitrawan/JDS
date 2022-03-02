const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const axios = require('axios')
const CC = require('currency-converter-lt')

exports.getAll = catchAsyncErrors(async (req, res, next) => {
    
    const fetch = await axios.get('https://60c18de74f7e880017dbfd51.mockapi.io/api/v1/jabar-digital-services/product')

    let fromCurrency = "USD"
    let toCurrency = "IDR"
    let amountToConvert = 1
    
    let currencyConverter = new CC({
        from: fromCurrency,
        to: toCurrency,
        amount: amountToConvert
    })

    currencyConverter.convert().then((response) => {
        console.log(amountToConvert + " " + fromCurrency + " " + " is Equals to " + response + " " + toCurrency);
    })
    
    res.status(200).json({
        success: true,
        data: fetch.data
    })

})