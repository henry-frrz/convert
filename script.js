const form = document.querySelector('form')
const amount = document.querySelector('#amount')
const currency = document.querySelector('#currency')
const footer = document.querySelector('footer')
const description = document.querySelector('#description')
const result = document.querySelector('#result')

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
  try {
    footer.classList.add('show-result')

    description.textContent = `${prefix} 1 = ${formatCurrencyBRL(price)}`

    const amountTotal = amount.value * price

    result.textContent = `${formatCurrencyBRL(amountTotal).replace(
      'R$',
      ''
    )} Reais`
  } catch (error) {
    alert('Não foi possível converter. Tente novamente mais tarde.')
  }
}

const formatCurrencyBRL = value => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
