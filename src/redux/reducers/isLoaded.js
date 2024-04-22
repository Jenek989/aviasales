import { SET_ERROR, SET_LOADED } from '../actions';

const initState = { isLoaded: false, isError: false };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADED:
      return { ...state, isLoaded: action.isLoaded };
    case SET_ERROR:
      return { ...state, isError: action.isError };
    default:
      return state;
  }
};

export default reducer;
