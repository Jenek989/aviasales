import classes from './SortTabs.module.scss';

const SortTabs = () => {
  return (
    <div className={classes.sortTabsWrapper}>
      <button className={classes.sortTabsBtnActive}>САМЫЙ ДЕШЕВЫЙ</button>
      <button className={classes.sortTabsBtn}>САМЫЙ БЫСТРЫЙ</button>
      <button className={classes.sortTabsBtn}>ОПТИМАЛЬНЫЙ</button>
    </div>
  );
};

export default SortTabs;
