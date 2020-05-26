import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchedCountriesList } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchedCountriesList());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value='global'>Global</option>
        {fetchedCountries.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
