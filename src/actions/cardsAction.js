import 'whatwg-fetch';

const KANBAN_STUB = 'http://localhost:3000/api/kanban';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD'

export const loadCardAction = () => {
  return dispatch => {
    return fetch(`${KANBAN_STUB}/cards/`)
    .then(result => {
      return result.json()
    }).then(cards => {
      dispatch({
        type: LOAD_CARDS,
        cards
      })
    }).catch(err => {
      console.log(err)
    })
  }
}

export const addCardAction = (card) => {

  const addCard = {
    name: card.name,
    priority: card.priority,
    status: card.status,
    created_by: card.created_by,
    assigned_to: card.assigned_to
  }

  return dispatch => {
    console.log('testssdfs')
    return fetch(`${KANBAN_STUB}/cards/`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(
        addCard
      )
    }).then(result => {
      return result.json()
    }).then(addedCard =>{
     return loadCardAction()(dispatch)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
