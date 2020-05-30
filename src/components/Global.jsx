import React from 'react';
import styles from '../css/Global.module.css';

import { Cards, Chart, CountryPicker, IntroCard } from './globalComponents';
import { fetchData } from '../api';

class Global extends React.Component {
  state = {
    data: {},
    country: '',
  };

  // Fetching the appropriate data on initial Load
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  // Handler to manage and update the country when selected
  handleCountryChange = async (country) => {
    if (country === 'global') {
      const fetchedData = await fetchData();

      this.setState({ data: fetchedData, country: '' });
    } else {
      const countryData = await fetchData(country);

      this.setState({ data: countryData, country: country });
    }
  };

  // Rendering the final data
  render() {
    const { data, country } = this.state;
    return (
      <div>
        <div className={styles.container}>
          <IntroCard />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}

export default Global;
