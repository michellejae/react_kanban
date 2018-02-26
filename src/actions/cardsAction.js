import 'whatwg-fetch';

const KANBAN_STUB = 'http://localhost:3000/api/kanban';

export const LOAD_CARDS = 'LOAD_CARDS';

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