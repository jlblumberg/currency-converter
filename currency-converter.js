const axios = require('axios');

const currencyUrl = 'http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1'
const countryUrl = 'https://restcountries.eu/rest/v2/currency'

const getExchangeRate = async (fromCurrency, toCurrency) => {
  const response = await axios.get(url);

  const rates = response.data.rates;
  const base = 1 / rates[fromCurrency];
  const exchangeRate = base * rates[toCurrency];

  return exchangeRate;
}

const getCountries = async (toCurrency) => {
  const response = await axios.get(`${countryUrl}/${toCurrency}`)
  return response.data.map(country => country.name);
}

// getExchangeRate('CAD', 'GBP');
// getCountries('USD');