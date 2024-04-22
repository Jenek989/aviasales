import { CHANGE_FILTER } from '../actions';

const initialState = {
  filters: [
    {
      id: 1,
      text: 'Все',
      isChecked: true,
      value: -1,
    },
    {
      id: 2,
      text: 'Без пересадок',
      isChecked: true,
      value: 0,
    },
    {
      id: 3,
      text: '1 пересадка',
      isChecked: true,
      value: 1,
    },
    {
      id: 4,
      text: '2 пересадки',
      isChecked: true,
      value: 2,
    },
    {
      id: 5,
      text: '3 пересадки',
      isChecked: true,
      value: 3,
    },
  ],
};

const setFilters = (stateFilters, idFilter) => {
  let firstCheckboxState;
  let newStateFilters;
  let allExceptFirstChecked;
  switch (idFilter) {
    case 1:
      firstCheckboxState = !stateFilters[0].isChecked;
      return stateFilters.map((item, index) =>
        index === 0 ? { ...item, isChecked: firstCheckboxState } : { ...item, isChecked: firstCheckboxState }
      );
    default:
      newStateFilters = stateFilters.map((item) =>
        item.id === idFilter ? { ...item, isChecked: !item.isChecked } : item
      );
      allExceptFirstChecked = newStateFilters.slice(1).every((item) => item.isChecked);
      return newStateFilters.map((item, index) => (index === 0 ? { ...item, isChecked: allExceptFirstChecked } : item));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filters: setFilters(state.filters, action.id),
      };
    default:
      return state;
  }
};

export default reducer;
