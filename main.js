const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteId = document.getElementById('quote-id')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

// Show Loading
function loading() {
  loader.hidden = false
  quoteContainer.hidden = true
}

// Hide Loading
function complete () {
  if (!loader.hidden) {
    quoteContainer.hidden = false
    loader.hidden = true
  }
}

// Get quote from API
async function getQuote() {
  loading()
  const apiUrl = 'https://api.adviceslip.com/advice'

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    quoteId.innerText = data.slip.id
    // Reduce font size for long quotes
    if (data.slip.advice.length > 120) {
      quoteText.classList.add('long-quote')
    } else {
      quoteText.classList.remove('long-quote')
    }
    quoteText.innerText = data.slip.advice

    complete()

  } catch (error) {
    getQuote()
  }
}

newQuoteBtn.addEventListener('click', getQuote)

getQuote()