import { SET_CARDLIST } from '../actions';

const reducer = (state = { cardList: [] }, action) => {
  switch (action.type) {
    case SET_CARDLIST:
      return { ...state, cardList: [...state.cardList, ...action.cardList] };
    default:
      return state;
  }
};

export default reducer;
