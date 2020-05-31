import axios from 'axios';

const UPDATES_URL = 'https://api.covid19india.org/updatelog/log.json';
const DAILY_DATA = 'https://api.covid19india.org/data.json';

// Function to fetch a list of Latest Updates
export const fetchUpdates = async () => {
  try {
    const { data } = await axios.get(UPDATES_URL);

    return data.reverse().slice(0, 10);
  } catch (error) {
    console.log(error);
  }
};
// ================================================================================

// Function to fetch the Daily Data then return it in a modified way as per the charting library requirement
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(DAILY_DATA);
    const total = data.cases_time_series;
    const date = total.map((day) => day.date);

    const totalConfirmed = total
      .map((day) => day.dailyconfirmed)
      .map((confirmed, index) => {
        return {
          x: date[index],
          y: confirmed,
        };
      });

    const totalDeceased = total
      .map((day) => day.dailydeceased)
      .map((deceased, index) => {
        return {
          x: date[index],
          y: deceased,
        };
      });

    const totalRecovered = total
      .map((day) => day.dailyrecovered)
      .map((recovered, index) => {
        return {
          x: date[index],
          y: recovered,
        };
      });

    const dataFeed = [
      {
        id: 'Confirmed',
        color: 'hsl(101, 70%, 50%)',
        data: totalConfirmed,
      },
      {
        id: 'Deceased',
        color: 'hsl(101, 70%, 50%)',
        data: totalDeceased,
      },
      {
        id: 'Recovered',
        color: 'hsl(101, 70%, 50%)',
        data: totalRecovered,
      },
    ];

    return {
      dataFeed: dataFeed,
      date: date,
    };
  } catch (error) {
    console.log(error);
  }
};
// ================================================================================

// Function to fetch the Total Data then return it in a modified way as per the charting library requirement
export const fetchTotalData = async () => {
  try {
    const { data } = await axios.get(DAILY_DATA);
    const total = data.cases_time_series;
    const date = total.map((day) => day.date);

    const totalConfirmed = total
      .map((day) => day.totalconfirmed)
      .map((confirmed, index) => {
        return {
          x: date[index],
          y: confirmed,
        };
      });

    const totalDeceased = total
      .map((day) => day.totaldeceased)
      .map((deceased, index) => {
        return {
          x: date[index],
          y: deceased,
        };
      });

    const totalRecovered = total
      .map((day) => day.totalrecovered)
      .map((recovered, index) => {
        return {
          x: date[index],
          y: recovered,
        };
      });

    const dataFeed = [
      {
        id: 'Confirmed',
        color: 'hsl(101, 70%, 50%)',
        data: totalConfirmed,
      },
      {
        id: 'Deceased',
        color: 'hsl(101, 70%, 50%)',
        data: totalDeceased,
      },
      {
        id: 'Recovered',
        color: 'hsl(101, 70%, 50%)',
        data: totalRecovered,
      },
    ];

    return {
      dataFeed: dataFeed,
      date: date,
    };
  } catch (error) {
    console.log(error);
  }
};
// ================================================================================
