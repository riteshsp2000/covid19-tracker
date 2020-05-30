import axios from 'axios';

const UPDATES_URL = 'https://api.covid19india.org/updatelog/log.json';

export const fetchUpdates = async () => {
  const res = await axios.get(UPDATES_URL);

  return res.data.reverse().slice(0, 10);
};
