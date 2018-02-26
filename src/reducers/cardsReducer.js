import { LOAD_CARDS } from '../actions/cardsAction';

const initialState = {
  cards: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
    return {...state, cards: action.cards}
  default: 
  return state;
  }
}