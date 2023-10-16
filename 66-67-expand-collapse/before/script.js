const buttons = document.querySelectorAll('.expand-button')

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const parent = e.target.closest('.card')
    const cardBody = parent.querySelector('.card-body')

    if (isCardBodyExpanded(cardBody)) {
      button.innerText = 'Expand'
      cardBody.classList.remove('show')
    } else {
      button.innerText = 'Collapse'
      cardBody.classList.add('show')
    }
  })
})

function isCardBodyExpanded(cardBody){
  let state
  cardBody.classList.contains('show') ? state = true : state = false
  return state
}