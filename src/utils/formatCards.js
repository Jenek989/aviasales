import { format } from 'date-fns';

export const getFormatData = (date, duration) => {
  const startDateObject = new Date(date);
  const endDateObgect = new Date(startDateObject.getTime() + duration * 60000);
  const startDate = format(startDateObject, 'HH:mm');
  const endDate = format(endDateObgect, 'HH:mm');
  return `${startDate} - ${endDate}`;
};

export const getFormatDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return format(new Date().setHours(hours, minutes), 'HH:mm');
};

export const getFormatPrice = (price) => {
  return price.toLocaleString('ru-RU', { style: 'decimal', currency: 'RUB' });
};

export const getFormatWords = (count) => {
  if (count === 1) {
    return 'ПЕРЕСАДКА';
  } else if (count > 1 && count < 5) {
    return 'ПЕРЕСАДКИ';
  } else {
    return 'ПЕРЕСАДОК';
  }
};
