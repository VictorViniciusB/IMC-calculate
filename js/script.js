import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notNumber} from './utils.js'

const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeigth = document.querySelector('#heigth')

inputWeigth.oninput = () => AlertError.close()
inputHeigth.oninput = () => AlertError.close()

form.onsubmit = event => {
  event.preventDefault()

  const weigth = inputWeigth.value
  const heigth = inputHeigth.value

  const weightOrHeigthIsNotANumber = notNumber(weigth) || notNumber(heigth)

  if(weightOrHeigthIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()
  
  const result = calculateIMC(weigth, heigth)
  displayResultMassage(result)
}

function displayResultMassage(result) {
  const message = `Seu IMC e de ${result}`

  Modal.message.innerText = message
  Modal.open()
}