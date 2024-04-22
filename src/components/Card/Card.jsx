import { getFormatData, getFormatDuration, getFormatPrice, getFormatWords } from '../../utils/formatCards';

import classes from './Card.module.scss';

const Card = ({ card }) => {
  const transitCount = (i) => card.segments[i].stops.length;
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.cardHeader}>
        <span className={classes.cardPrice}>{getFormatPrice(card.price)} Р</span>
        <img className={classes.cardImg} src={`//pics.avs.io/99/36/${card.carrier}.png`} alt="Компания"></img>
      </div>
      <div className={classes.cardMain}>
        <div className={classes.cardMainTransfer}>
          <div className={classes.cardDetails}>
            {card.segments[0].origin} - {card.segments[0].destination}
            <span className={classes.cardTime}>{getFormatData(card.segments[0].date, card.segments[0].duration)}</span>
          </div>
          <div className={classes.cardDetails}>
            В ПУТИ
            <span className={classes.cardTime}>{getFormatDuration(card.segments[0].duration)}</span>
          </div>
          <div className={classes.cardDetails}>
            {`${transitCount(0) || 'БЕЗ'} ${getFormatWords(transitCount(0))}`}
            <span className={classes.cardTime}>{card.segments[0].stops.join(', ')}</span>
          </div>
        </div>
        <div className={classes.cardMainTransfer}>
          <div className={classes.cardDetails}>
            {card.segments[1].origin} - {card.segments[1].destination}
            <span className={classes.cardTime}>{getFormatData(card.segments[1].date, card.segments[1].duration)}</span>
          </div>
          <div className={classes.cardDetails}>
            В ПУТИ
            <span className={classes.cardTime}>{getFormatDuration(card.segments[1].duration)}</span>
          </div>
          <div className={classes.cardDetails}>
            {`${transitCount(1) || 'БЕЗ'} ${getFormatWords(transitCount(1))}`}
            <span className={classes.cardTime}>{card.segments[1].stops.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
