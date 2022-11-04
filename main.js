const quoteText = document.getElementById('quote')
const quoteId = document.getElementById('quote-id')

// Get quote from API
async function getQuote() {
  const apiUrl = 'https://api.adviceslip.com/advice'

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    quoteId.innerText = data.slip.id
    quoteText.innerText = data.slip.advice

  } catch (error) {
    getQuote()
  }
}

getQuote()