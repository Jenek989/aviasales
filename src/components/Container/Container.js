import { connect } from 'react-redux';
import { sortBy } from 'lodash';

import CardList from '../CardList/CardList';

const getFilterCards = (tickets, filter = []) => {
  if (filter.some((f) => f.id === 1)) return tickets;
  if (!filter.length) return [];
  return tickets.filter((ticket) => filter.some((f) => ticket.segments.every((t) => t.stops.length === f.value)));
};

const getSortCards = (tickets, tab) => {
  switch (tab.id) {
    case 1:
      return sortBy(tickets, 'price');
    case 2:
      return sortBy(tickets, (card) => card.segments[0].duration + card.segments[1].duration);
    case 3:
      return sortBy(tickets, (card) => card.segments[0].duration + card.segments[1].duration + card.price);
    default:
      return tickets;
  }
};

const mapStateToProps = (state) => ({
  cardList: getFilterCards(
    getSortCards(
      state.cardsReducer.cardList,
      state.sortTabsReducer.tabs.find((tab) => tab.isActive)
    ),
    state.filtersReducer.filters.filter((f) => f.isChecked)
  ),
  count: state.countReducer,
  isLoaded: state.isLoadedReducer.isLoaded,
});

export const CardListContainer = connect(mapStateToProps)(CardList);
