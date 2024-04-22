import Card from '../Card/Card';

import classes from './CardList.module.scss';

const CardList = ({ cardList, count }) => {
  return (
    <div className={classes.cardListWrapper}>
      {cardList.map((card, index) => {
        if (index < count) return <Card key={index} card={card} />;
      })}
    </div>
  );
};

export default CardList;
