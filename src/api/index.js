import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const url2 = 'https://corona-api.com/timeline';

// Function to fetch the Cards Data as well as individual country Data
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
// ================================================================================

// ================================================================================

// Function to fetch a list of countries
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
// ================================================================================

export const fetchDailyData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(url2);

    const date = data.map(({ date }) => date).reverse();
    const confirmed = data.map(({ confirmed }) => confirmed).reverse();
    const deaths = data.map(({ deaths }) => deaths).reverse();
    const recovered = data.map(({ recovered }) => recovered).reverse();

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

    const finalDataRecovered = recovered.map((deaths, index) => {
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
        id: 'Deceased',
        color: 'hsl(127, 70%, 50%)',
        data: finalDataDeaths,
      },
      {
        id: 'Recovered',
        color: 'hsl(127, 70%, 50%)',
        data: finalDataRecovered,
      },
    ];

    return { dataFinalFeed, date };
  } catch (error) {
    console.log(error);
  }
};
