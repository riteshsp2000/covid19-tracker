import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// Defining a function to fetch the Cards Data as well as individual country Data
export const fetchData = async (country) => {
  let variableURL = url;

  if (country) {
    variableURL = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(variableURL);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

// Defining a function to fetch the daily Data for the global graph and then modifing the data to return in the appropriate form
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    const date = modifiedData
      .map(({ date }) => date)
      .filter((_, i) => !(i % 4));
    const confirmed = modifiedData
      .map(({ confirmed }) => confirmed)
      .filter((_, i) => !(i % 4));
    const deaths = modifiedData
      .map(({ deaths }) => deaths)
      .filter((_, i) => !(i % 4));

    const finalDataConfirmed = confirmed.map((confirmed, index) => {
      return {
        x: date[index],
        y: confirmed,
      };
    });

    const finalDataDeaths = deaths.map((deaths, index) => {
      return {
        x: date[index],
        y: deaths,
      };
    });

    const dataFinalFeed = [
      {
        id: 'Confirmed',
        color: 'hsl(273, 70%, 50%)',
        data: finalDataConfirmed,
      },
      {
        id: 'Deaths',
        color: 'hsl(127, 70%, 50%)',
        data: finalDataDeaths,
      },
    ];

    return dataFinalFeed;
  } catch (error) {
    console.log(error);
  }
};

// Defining a function to fetch a list of countries
export const fetchedCountriesList = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
