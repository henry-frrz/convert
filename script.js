const amount = document.querySelector('#amount')

amount.oninput = event => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
}