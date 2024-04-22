import axios from 'axios';
import { message } from 'antd';

export const getSearchId = async () => {
  try {
    if (!window.navigator.onLine) message.error('Проверьте подключение к интернету');
    const res = await axios.get('https://aviasales-test-api.kata.academy/search');
    return res.data.searchId;
  } catch (error) {
    return '';
  }
};

export const getTicketsData = async (searchId) => {
  try {
    if (!window.navigator.onLine) message.error('Проверьте подключение к интернету');
    const res = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    return res.data;
  } catch (error) {
    return null;
  }
};
