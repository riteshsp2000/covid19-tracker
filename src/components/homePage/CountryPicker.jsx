import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchedCountriesList } from '../../api';

import styles from '../../css/CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchedCountriesList());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl} id='countryPicker'>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleCountryChange(e.target.value)}
      >
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
