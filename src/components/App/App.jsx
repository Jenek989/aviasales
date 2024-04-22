import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Filter from '../Filter/Filter';
import SortTabs from '../SortTabs/SortTabs';
import { CardListContainer } from '../Container/Container';
import * as actions from '../../redux/actions';

import logo from './logo.svg';
import classes from './App.module.scss';

const App = ({ fetchTickets, countVisibleCards, changeTab, tabs, filters, changeFilter }) => {
  useEffect(() => {
    fetchTickets();
  }, []);
  return (
    <div className={classes.appWrapper}>
      <header className={classes.appHeader}>
        <img className={classes.appImg} src={logo} alt="Самолет"></img>
      </header>
      <div className={classes.appContainer}>
        <Filter filters={filters} changeFilter={changeFilter} />
        <main className={classes.appResults}>
          <SortTabs tabs={tabs} changeTab={changeTab} />
          <CardListContainer />
          <button className={classes.appBtnMore} onClick={() => countVisibleCards()}>
            Показать еще 5 билетов
          </button>
        </main>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardList: state.cardsReducer.cardList,
  tabs: state.sortTabsReducer.tabs,
  filters: state.filtersReducer.filters,
});
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
