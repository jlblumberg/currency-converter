const axios = require('axios');

const currencyUrl = 'http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1'
const countryUrl = 'https://restcountries.eu/rest/v2/currency'

const getExchangeRate = async (fromCurrency, toCurrency) => {
  const response = await axios.get(currencyUrl);

  const rates = response.data.rates;
  const base = 1 / rates[fromCurrency];
  const exchangeRate = base * rates[toCurrency];

  if(isNaN(exchangeRate)) {
    throw new Error(`Unable to process currencies: ${fromCurrency} and ${toCurrency}. Please check that the currency codes are correct.`)
  }

  return exchangeRate;
}

const getCountries = async (toCurrency) => {
  const response = await axios.get(`${countryUrl}/${toCurrency}`)
  return response.data.map(country => country.name);
}

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
  const countries = await getCountries(toCurrency);
  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`
}

convertCurrency('USD', 'CAD', 30)
  .then((message) => {
    console.log(message);
  }).catch((error) => {
    console.log(error.message);
  });
