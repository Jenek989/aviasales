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
                  id="1"
                  onChange={() => changeFilter(filter.id)}
                  checked={filter.isChecked}
                ></input>
                <label className={classes.filterLabel} htmlFor="1">
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

// const Filter = ({ filters }) => {
//   return (
//     <div className={classes.filterWrapper}>
//       <div className={classes.filterItems}>
//         <span className={classes.filterTitle}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
//         <ul className={classes.filterItemList}>
//           <li className={classes.filterItem}>
//             <input className={classes.filterCheckbox} type="checkbox" id="1"></input>
//             <label className={classes.filterLabel} htmlFor="1">
//               Все
//             </label>
//           </li>
//           <li className={classes.filterItem}>
//             <input className={classes.filterCheckbox} type="checkbox" id="2"></input>
//             <label className={classes.filterLabel} htmlFor="2">
//               Без пересадок
//             </label>
//           </li>
//           <li className={classes.filterItem}>
//             <input className={classes.filterCheckbox} type="checkbox" id="3"></input>
//             <label className={classes.filterLabel} htmlFor="3">
//               1 пересадка
//             </label>
//           </li>
//           <li className={classes.filterItem}>
//             <input className={classes.filterCheckbox} type="checkbox" id="4"></input>
//             <label className={classes.filterLabel} htmlFor="4">
//               2 пересадки
//             </label>
//           </li>
//           <li className={classes.filterItem}>
//             <input className={classes.filterCheckbox} type="checkbox" id="5"></input>
//             <label className={classes.filterLabel} htmlFor="5">
//               2 пересадки
//             </label>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
