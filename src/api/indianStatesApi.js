import axios from 'axios';

const STATES_DATA = 'https://api.covid19india.org/data.json';

export const fetchStatesData = async () => {
  const {
    data: { statewise },
  } = await axios.get(STATES_DATA);

  const indiaUpdate = statewise.shift();

  return { indiaUpdate, statewise };
};
