import axios from 'axios';

export const getSearchId = async () => {
  try {
    const res = await axios.get('https://aviasales-test-api.kata.academy/search');
    return res.data.searchId;
  } catch (error) {
    return '';
  }
};

export const getTicketsData = async (searchId) => {
  try {
    const res = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    return res.data;
  } catch (error) {
    return null;
  }
};
