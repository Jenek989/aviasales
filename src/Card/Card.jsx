import logo from './logo.svg';
import classes from './Card.module.scss';

const Card = () => {
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.cardHeader}>
        <span className={classes.cardPrice}>13400 Р</span>
        <img className={classes.cardImg} src={logo} alt="Компания"></img>
      </div>
      <div className={classes.cardMain}>
        <div className={classes.cardMainTransfer}>
          <div className={classes.cardDetails}>
            MOW - HKT
            <span className={classes.cardTime}>10:45 - 08:00</span>
          </div>
          <div className={classes.cardDetails}>
            В ПУТИ
            <span className={classes.cardTime}>21ч 15м</span>
          </div>
          <div className={classes.cardDetails}>
            2 ПЕРЕСАДКИ
            <span className={classes.cardTime}>HKG, JNB</span>
          </div>
        </div>
        <div className={classes.cardMainTransfer}>
          <div className={classes.cardDetails}>
            MOW - HKT
            <span className={classes.cardTime}>10:45 - 08:00</span>
          </div>
          <div className={classes.cardDetails}>
            В ПУТИ
            <span className={classes.cardTime}>21ч 15м</span>
          </div>
          <div className={classes.cardDetails}>
            2 ПЕРЕСАДКИ
            <span className={classes.cardTime}>HKG, JNB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
