import { SET_COUNT_VISIBLE_CARDS } from '../actions';

const reducer = (state = 5, action) => {
  switch (action.type) {
    case SET_COUNT_VISIBLE_CARDS:
      return state + 5;
    default:
      return state;
  }
};

export default reducer;
