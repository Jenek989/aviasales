import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';
import SortTabs from '../SortTabs/SortTabs';

import logo from './logo.svg';
import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.appWrapper}>
      <header className={classes.appHeader}>
        <img className={classes.appImg} src={logo} alt="Самолет"></img>
      </header>
      <div className={classes.appContainer}>
        <Filter />
        <main className={classes.appResults}>
          <SortTabs />
          <CardList />
          <button className={classes.appBtnMore}>Показать еще 5 билетов</button>
        </main>
      </div>
    </div>
  );
};

export default App;
