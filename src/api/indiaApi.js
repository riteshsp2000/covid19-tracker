import axios from 'axios';

const UPDATES_URL = 'https://api.covid19india.org/updatelog/log.json';
const DAILY_DATA = 'https://api.covid19india.org/data.json';

export const fetchUpdates = async () => {
  const res = await axios.get(UPDATES_URL);

  return res.data.reverse().slice(0, 10);
};

export const fetchDailyData = async () => {
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
};

export const fetchTotalData = async () => {
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
};
