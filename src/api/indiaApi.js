import axios from 'axios';

const UPDATES_URL = 'https://api.covid19india.org/updatelog/log.json';
const DAILY_DATA = 'https://api.covid19india.org/data.json';
const RAW_PATIENT_DATA = 'https://api.covid19india.org/raw_data5.json';

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

// Function to fetch the data regarding Testing
export const fetchTestedData = async () => {
  try {
    const {
      data: { tested },
    } = await axios.get(DAILY_DATA);

    const date = tested
      .map(({ updatetimestamp }) => updatetimestamp)
      .map((date) => {
        const splitDate = date.split(' ');
        return splitDate[0];
      });

    const testedArray = tested
      .map(({ totalsamplestested }) => totalsamplestested)
      .map((tests, index) => {
        return {
          x: date[index],
          y: tests || 0,
        };
      });

    const finalData = [
      {
        id: 'Tests Performed',
        color: 'hsl(101, 70%, 50%)',
        data: testedArray,
      },
    ];

    return {
      finalData,
      date,
    };
  } catch (error) {
    console.log(error);
  }
};
// ================================================================================

export const fetchMonthlyData = async () => {
  const { data } = await axios.get(DAILY_DATA);
  const dailyData = data.cases_time_series;

  let MONTHS = [
    { month: 'January', confirmed: 0, dead: 0, recovered: 0 },
    { month: 'February', confirmed: 0, dead: 0, recovered: 0 },
    { month: 'March', confirmed: 0, dead: 0, recovered: 0 },
    { month: 'April', confirmed: 0, dead: 0, recovered: 0 },
    { month: 'May', confirmed: 0, dead: 0, recovered: 0 },
    { month: 'June', confirmed: 0, dead: 0, recovered: 0 },
    { month: 'July', confirmed: 0, dead: 0, recovered: 0 },
    { month: 'August', confirmed: 0, dead: 0, recovered: 0 },
    { month: 'September', confirmed: 0, dead: 0, recovered: 0 },
    { month: 'October', confirmed: 0, dead: 0, recovered: 0 },
    { month: 'November', confirmed: 0, dead: 0, recovered: 0 },
    { month: 'December', confirmed: 0, dead: 0, recovered: 0 },
  ];

  dailyData.forEach((data) => {
    for (let i = 0; i < MONTHS.length; i++) {
      if (data.date.includes(MONTHS[i].month)) {
        MONTHS[i].confirmed += +data.dailyconfirmed;
        MONTHS[i].dead += +data.dailydeceased;
        MONTHS[i].recovered += +data.dailyrecovered;
        break;
      }
    }
  });
  MONTHS = MONTHS.filter((month) => month.confirmed > 0);

  return MONTHS;
};

export const fetchStateData = async () => {
  const {
    data: { statewise },
  } = await axios.get(DAILY_DATA);

  const topAffected = statewise.slice(1, 11).map(({ confirmed, state }) => {
    return {
      id: state,
      label: state,
      value: parseInt(confirmed, 10),
    };
  });

  const index = topAffected.map((object) => {
    if (object.id === 'State Unassigned') {
      return topAffected.indexOf(object);
    }
    return null;
  });

  if (!index) {
    return;
  } else {
    topAffected.splice(8, 1);
  }

  const otherStatesSum = statewise
    .slice(11, 38)
    .map(({ confirmed }) => confirmed)
    .map((number) => parseInt(number, 10))
    .reduce((a, b) => a + b);

  topAffected.push({
    id: 'others',
    label: 'others',
    value: otherStatesSum,
  });

  return topAffected;
};

export const fetchAgeData = async () => {
  const {
    data: { raw_data },
  } = await axios.get(RAW_PATIENT_DATA);

  const ageArray = raw_data
    .map(({ agebracket }) => {
      if (agebracket === '') return null;
      return parseInt(agebracket, 10);
    })
    .filter((x) => x)
    .slice(0, 5000)
    .sort((a, b) => a - b);

  const ages = Array(10).fill(0);

  ageArray.forEach((age) => {
    for (let i = 0; i < 10; i++) {
      if (age > i * 10 && age <= (i + 1) * 10) {
        ages[i]++;
      }
    }
  });

  const finalData = {
    root: {
      name: 'All People',
      children: [
        {
          name: '0-10 yrs',
          loc: ages[0],
        },
        {
          name: '10-20 yrs',
          loc: ages[1],
        },
        {
          name: '20-30 yrs',
          loc: ages[2],
        },
        {
          name: '30-40 yrs',
          loc: ages[3],
        },
        {
          name: '40-50 yrs',
          loc: ages[4],
        },
        {
          name: '50-60 yrs',
          loc: ages[5],
        },
        {
          name: '60-70 yrs',
          loc: ages[6],
        },
        {
          name: '70-80 yrs',
          loc: ages[7],
        },
        {
          name: '80-90 yrs',
          loc: ages[9],
        },
        {
          name: '90-100 yrs',
          loc: ages[9],
        },
      ],
    },
  };
  return finalData;
};
