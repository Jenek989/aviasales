import { CHANGE_TAB } from '../actions';

const initialState = {
  tabs: [
    {
      id: 1,
      text: 'САМЫЙ ДЕШЕВЫЙ',
      isActive: true,
    },
    {
      id: 2,
      text: 'САМЫЙ БЫСТРЫЙ',
      isActive: false,
    },
    {
      id: 3,
      text: 'ОПТИМАЛЬНЫЙ',
      isActive: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        tabs: state.tabs.map((tab) => {
          if (tab.id === action.id) return { ...tab, isActive: true };
          else return { ...tab, isActive: false };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
