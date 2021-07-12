import { STATE_CODES } from "../constants";

import axios from "axios";
import { startOfDay, parse, isBefore } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

const STATES_DATA = "https://api.covid19india.org/data.json";
const STATES_DAILY_DATA = "https://api.covid19india.org/states_daily.json";
const DISTRICT_ZONES = "https://api.covid19india.org/zones.json";
const DISTRICT_DATA =
  "https://api.covid19india.org/v2/state_district_wise.json";

export const fetchStatesData = async () => {
  const {
    data: { statewise },
  } = await axios.get(STATES_DATA);

  const indiaUpdate = statewise.shift();

  return { indiaUpdate, statewise };
};

const getIndiaDay = () => {
  return startOfDay(utcToZonedTime(new Date(), "Asia/Kolkata"));
};

const convert = (str) => {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [mnth, day].join("-");
};

export const parseStateTimeseries = ({ states_daily: data }) => {
  const statewiseSeries = Object.values(STATE_CODES).reduce((a, c) => {
    a[c] = [];
    return a;
  }, {});

  const today = getIndiaDay();
  for (let i = 0; i < data.length; i += 3) {
    const date = parse(data[i].date, "dd-MMM-yy", new Date());
    // Skip data from the current day
    if (isBefore(date, today)) {
      Object.entries(statewiseSeries).forEach(([k, v]) => {
        const stateCode = k.toLowerCase();
        const prev = v[v.length - 1] || {};
        // Parser
        const dailyconfirmed = +data[i][stateCode] || 0;
        const dailyrecovered = +data[i + 1][stateCode] || 0;
        const dailydeceased = +data[i + 2][stateCode] || 0;
        const totalconfirmed = +data[i][stateCode] + (prev.totalconfirmed || 0);
        const totalrecovered =
          +data[i + 1][stateCode] + (prev.totalrecovered || 0);
        const totaldeceased =
          +data[i + 2][stateCode] + (prev.totaldeceased || 0);
        // Push
        v.push({
          date: convert(date.toString()),
          dailyconfirmed: dailyconfirmed,
          dailyrecovered: dailyrecovered,
          dailydeceased: dailydeceased,
          totalconfirmed: totalconfirmed,
          totalrecovered: totalrecovered,
          totaldeceased: totaldeceased,
          // Active = Confimed - Recovered - Deceased
          totalactive: totalconfirmed - totalrecovered - totaldeceased,
          dailyactive:
            dailyconfirmed - dailyrecovered - dailydeceased > 0
              ? dailyconfirmed - dailyrecovered - dailydeceased
              : 0,
        });
      });
    }
  }

  return statewiseSeries;
};

export const fetchStatesDailyData = async (stateName) => {
  const { data } = await axios.get(STATES_DAILY_DATA);
  const StateData = parseStateTimeseries(data)[STATE_CODES[stateName]];
  // console.log(parseStateTimeseries(data));
  const confirmedData = [];
  const activeData = [];
  const deceasedData = [];
  const recoveredData = [];
  const dates = [];

  StateData.map(
    ({ dailyconfirmed, dailyactive, dailydeceased, dailyrecovered, date }) => {
      confirmedData.push({ x: date, y: dailyconfirmed });
      activeData.push({ x: date, y: dailyactive });
      deceasedData.push({ x: date, y: dailydeceased });
      recoveredData.push({ x: date, y: dailyrecovered });
      dates.push(date);
      return null;
    }
  );

  const confirmed = [
    {
      id: "Confirmed",
      color: "hsl(101, 70%, 50%)",
      data: confirmedData,
    },
  ];

  const active = [
    {
      id: "Active",
      color: "hsl(101, 70%, 50%)",
      data: activeData,
    },
  ];

  const deceased = [
    {
      id: "Deceased",
      color: "hsl(101, 70%, 50%)",
      data: deceasedData,
    },
  ];

  const recovered = [
    {
      id: "Recovered",
      color: "hsl(101, 70%, 50%)",
      data: recoveredData,
    },
  ];

  return {
    confirmed,
    active,
    deceased,
    recovered,
    dates,
    areaName: stateName,
  };
};

// ========================================= Districts Data Fetching =========================================

export const fetchDistrictsData = async (stateName) => {
  // const { data } = await axios.get(DISTRICT_LIST_DATA);

  // const districtData = data[STATE_CODES[stateName]]['districts'];
  // return districtData;

  const { data } = await axios.get(DISTRICT_DATA);
  data.shift();

  const stateData = data
    .map((state) => {
      if (state.state === stateName) {
        return state;
      }
      return null;
    })
    .filter(function (element) {
      return element !== undefined;
    })
    .filter(function (el) {
      return el != null;
    });

  return stateData[0];
};

export const fetchDistrictZones = async (stateName) => {
  const {
    data: { zones },
  } = await axios.get(DISTRICT_ZONES);

  let green = [];
  let red = [];
  let orange = [];

  zones.map(({ district, state, zone }) => {
    if (state === stateName) {
      switch (zone) {
        case "Green":
          green.push(district);
          break;
        case "Orange":
          orange.push(district);
          break;
        case "Red":
          red.push(district);
          break;
        default:
          break;
      }
    }
    return null;
  });

  return { green, red, orange };
};
