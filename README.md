# Currency converter

[Outline](#Outline) | [Installation Instructions](#Installation_Instructions) | [Tech stack](#Tech_stack) | [Example use](#Example_use) 

## <a name="Outline">Outline</a>

A minimalist currency conversion solution which can be run in the command line. I built this to practice with JavaScript's asynchronous behavior, specifically with API calls. It makes use of two APIs - one to get the [countries](https://restcountries.eu/rest/v2/currency) where a currency can be used and one for [exchange rates](http://data.fixer.io/api/latest).

## <a name="Installation_Instructions">Installation Instructions</a>

### Prerequisite setup:
- Clone this repo to your local machine and cd into it
- Download Node.js if you don't have it already - [instructions here](https://nodejs.org/en/)
- Run `npm install` to get the necessary dependency (axios)

### Using the program

- Edit the arguments in the function call at the bottom of `currency-converter.js` with your desired base currency, converted currency, and amount
  - It should be in the format: `convertCurrency(fromCurrency, toCurrency, amount)`
- Run command `node currency-converter.js` to run the program

## <a name="Tech_stack">Tech stack</a>

NodeJS and axios for API calls

Data:
- [Countries](https://restcountries.eu/rest/v2/currency)
- [Exchange rates](http://data.fixer.io/api/latest)

## <a name="Example_use">Example use</a>

`convertCurrency('USD', 'CAD', 30)` returns: `30 USD is worth 40.71 CAD. You can spend this in the following country/countries: Canada.`
