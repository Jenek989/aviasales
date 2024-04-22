import classes from './SortTabs.module.scss';

const SortTabs = ({ tabs, changeTab }) => {
  return (
    <div className={classes.sortTabsWrapper}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={tab.isActive ? classes.sortTabsBtnActive : classes.sortTabsBtn}
          onClick={() => changeTab(tab.id)}
        >
          {tab.text}
        </button>
      ))}
    </div>
  );
};

export default SortTabs;
