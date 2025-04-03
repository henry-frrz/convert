const form = document.querySelector('form')
const amount = document.querySelector('#amount')
const currency = document.querySelector('#currency')

const USD = 5.82
const EUR = 6.34
const GBP = 7.53

amount.oninput = event => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
}

form.onsubmit = event => {
  event.preventDefault()

  switch (currency.value) {
    case 'USD':
      convertCurrency(USD, 'US$')
      break
    case 'EUR':
      convertCurrency(EUR, '€')
      break
    case 'GBP':
      convertCurrency(GBP, '£')
      break
  }
}

const convertCurrency = (price, prefix) => {
  console.log(price, prefix);
  
}
