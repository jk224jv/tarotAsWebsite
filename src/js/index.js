/**
 * This is the start of the app.
 * The Omnissiah's Tarot.
 *
 * @author Jimmy Karlsson <jk224jv@strudent.lnu.se>
 */
import { tarotDeck } from './tarotdeck.js'

try {
  document.onload = main()
} catch (e) {
  console.error(e.message)
}

/**
 * Main function  and starting point of the application.
 */
function main () {
  applySettings()
  const canvas = document.getElementById('surface')
  const pInfo = document.getElementById('unSupportedInfo')

  // make sure the user is not on an obsolete browser.
  if (!canvas.getContext) {
    // canvas-unsupported code here
    pInfo.classList.toggle('hidden')
    throw new Error('Unsupported browser')
  }

  // setup button listening events
  const btnCardOftheDay = document.querySelector('#cardOfTheDay')
  const btnThreeCardsSpread = document.getElementById('threeCardSpread')
  const btnExit = document.getElementById('exit')
  const btnSetting = document.getElementById('settings')

  btnCardOftheDay.addEventListener('click', cardOftheDay)
  btnThreeCardsSpread.addEventListener('click', threeCardsSpread)
  btnExit.addEventListener('click', exit)
  btnSetting.addEventListener('click', settings)

  const hrLines = document.getElementsByClassName('line')

  for (let index = 0; index < hrLines.length; index++) {
    const line = hrLines[index]
    const filler = document.createTextNode(''.padEnd(Math.floor(screen.availWidth / 8), '*'))
    line.appendChild(filler)
  }
}

/**
 * Set the console output to the stored settings: backgroundColor, textColor, textBrightness.
 */
function applySettings () {
  const root = document.documentElement
  root.style.setProperty('--background-color', tarotDeck.settings.backgroundColor)
  root.style.setProperty('--color', tarotDeck.settings.textColor)
}

/**
 * Card of the day. Draw and display one card representing your day.
 */
function cardOftheDay () {
  console.log('card of the day - not yet implememted.')
  tarotDeck.writeCardFrame(50, 50)
}

/**
 * Draw and display three card representing something.
 */
function threeCardsSpread () {
  console.log('three card spread - not yet implememted.')
}

/**
 * Displays the credits... The Omnissiah have to be blessed somewhere.
 */
function exit () {
  const divCredits = document.getElementById('credits')
  const canvas = document.getElementById('surface')
  canvas.classList.toggle('hidden')
  divCredits.classList.toggle('hidden')
}
/**
 * Display settings form and handle new settings.
 */
function settings () {
  console.log('setting - not yet implememted.')
}
