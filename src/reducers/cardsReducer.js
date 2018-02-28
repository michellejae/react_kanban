import { LOAD_CARDS, LOAD_SINGLE_CARD } from '../actions/cardsAction';

const initialState = {
  cards: [],
  singleCard: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
    return {...state, cards: action.cards}
    case LOAD_SINGLE_CARD:
    return {...state, singleCard: action.singleCard}
  default: 
  return state;
  }
}