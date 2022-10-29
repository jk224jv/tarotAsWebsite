try {
  document.onload = main()
} catch (e) {
  console.error(e.message)
}

/**
 * Main function  and starting point of the application.
 */
function main () {
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
  console.log(btnCardOftheDay)
  const btnThreeCardsSpread = document.getElementById('threeCardSpread')
  const btnExit = document.getElementById('exit')

  btnCardOftheDay.addEventListener('click', cardOftheDay)
  btnThreeCardsSpread.addEventListener('click', threeCardsSpread)
  btnExit.addEventListener('click', exit)

  const hrLines = document.getElementsByClassName('line')

  for (let index = 0; index < hrLines.length; index++) {
    const line = hrLines[index]
    const filler = document.createTextNode(''.padEnd(Math.floor(screen.availWidth / 8), '*'))
    line.appendChild(filler)
  }
}

/**
 * Card of the day. Draw and display one card representing your day.
 */
function cardOftheDay () {
  console.log('card of the day')
}

/**
 * Draw and display three card representing something.
 */
function threeCardsSpread () {
  console.log('three card spread')
}

/**
 * Displays the credits... The Omnissiah have to be blessed somewhere.
 */
function exit () {
  console.log('exit')
}
