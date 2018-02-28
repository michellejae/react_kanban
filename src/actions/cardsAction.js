import 'whatwg-fetch';

const KANBAN_STUB = 'http://localhost:3000/api/kanban';

export const LOAD_CARDS = 'LOAD_CARDS';
export const LOAD_SINGLE_CARD = 'LOAD_SINGLE_CARD';
export const POP_UP = 'POP_UP'

export const loadSingleCardAction = (id) => {

  return dispatch => {
    return fetch(`${KANBAN_STUB}/cards/${id}`)
    .then(result => {
      return result.json()
    }).then(singleCard =>{
      dispatch({
        type: LOAD_SINGLE_CARD,
        singleCard
      })
    }).catch(err =>{
      console.log(err)
    })
  }
}

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

export const editCardAction = (card) => {

  let id = card.id
  const editCard = {
    name: card.name,
    priority: card.priority,
    status: card.status,
    created_by: card.created_by,
    assigned_to: card.assigned_to
  }

 return dispatch => {
    return fetch(`${KANBAN_STUB}/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(
        editCard
      )
    }).then(result =>{
      return result.json()
    }).then(editedCard =>{
      return loadCardAction()(dispatch)
    }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteCardAction = (card) => {
  let id = card.id

  return dispatch => {
    return fetch(`${KANBAN_STUB}/cards/${id}`, {
      method: 'DELETE',
    }).then(result => {
      return result.json()
    }).then(deletedCard => {
      return loadCardAction()(dispatch)
    }).catch(err =>{
      console.log(err)
    })
  }
}

export const handlePopUps = (state) => {
  return {
    type: POP_UP,
    state
  }
}