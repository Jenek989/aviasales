import { Alert } from 'antd';

import Card from '../Card/Card';

import classes from './CardList.module.scss';

const CardList = ({ cardList, count, isLoaded }) => {
  if (!cardList.length && isLoaded)
    return <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" />;
  return (
    <div className={classes.cardListWrapper}>
      {cardList.map((card, index) => {
        if (index < count) return <Card key={index} card={card} />;
      })}
    </div>
  );
};

export default CardList;
