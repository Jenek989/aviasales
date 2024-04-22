import classes from './Filter.module.scss';

const Filter = ({ filters, changeFilter }) => {
  return (
    <div className={classes.filterWrapper}>
      <div className={classes.filterItems}>
        <span className={classes.filterTitle}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        <ul className={classes.filterItemList}>
          {filters.map((filter) => {
            return (
              <li key={filter.id} className={classes.filterItem}>
                <input
                  className={classes.filterCheckbox}
                  type="checkbox"
                  id={filter.id}
                  onChange={() => changeFilter(filter.id)}
                  checked={filter.isChecked}
                ></input>
                <label className={classes.filterLabel} htmlFor={filter.id}>
                  {filter.text}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
