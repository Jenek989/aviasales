import { getSearchId, getTicketsData } from '../api/aviasalesApi';

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_TAB = 'CHANGE_TAB';
export const SET_COUNT_VISIBLE_CARDS = 'COUNT_VISIBLE_CARDS';
export const SET_CARDLIST = 'SET_CARDLIST';
export const SET_LOADED = 'SET_LOADED';
export const SET_ERROR = 'SET_ERROR';

export const countVisibleCards = () => ({ type: SET_COUNT_VISIBLE_CARDS });
export const changeFilter = (id) => ({ type: CHANGE_FILTER, id });
export const changeTab = (id) => ({ type: CHANGE_TAB, id });
export const setLoaded = (isLoaded) => ({ type: SET_LOADED, isLoaded });
export const setError = (isError) => ({ type: SET_ERROR, isError });
export const fetchTickets = () => async (dispatch) => {
  try {
    const searchId = await getSearchId();
    let stop = false;
    while (!stop) {
      const data = await getTicketsData(searchId);
      if (!data) continue;
      dispatch({ type: SET_CARDLIST, cardList: data.tickets });
      stop = data.stop;
      if (stop) dispatch(setLoaded(true));
    }
  } catch (error) {
    dispatch(setError(true));
  }
};
