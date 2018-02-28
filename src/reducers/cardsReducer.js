import { LOAD_CARDS, LOAD_SINGLE_CARD, POP_UP} from '../actions/cardsAction';

const initialState = {
  cards: [],
  singleCard: {   
    name: '',
    priority: '',
    status: '',
    created_by: '',
    assigned_to: ''
  },
  showEdit: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
    return {...state, cards: action.cards}
    case LOAD_SINGLE_CARD:
    return {...state, singleCard: action.singleCard}
    case POP_UP:
    return {...state, showEdit: action.state}
  default: 
  return state;
  }
}