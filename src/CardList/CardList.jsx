import Card from '../Card/Card';

import classes from './CardList.module.scss';

const CardList = () => {
  return (
    <div className={classes.cardListWrapper}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
