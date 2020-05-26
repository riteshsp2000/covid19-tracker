import React from 'react';
import cx from 'classnames';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  renderIntro() {
    return (
      <div>
        <div className={styles.content}>
          <h5>
            Coronavirus <span>Covid-19</span>
          </h5>
          <h2>World Live Tracker</h2>
          <h4>Stay Home, Stay Safe</h4>
          <p>
            The best way to prevent and slow down transmission is to be well
            informed about the Covid-19 disease. Protect yourself and others
            from infection by washing your hands at-least 20 sec nd not touching
            your face.
          </p>
        </div>
        <div className={styles.imgDiv}>
          <img src='./img/distancing.png' alt='' />
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const countryData = await fetchData(country);

    this.setState({ data: countryData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className='ui container'>
        {this.renderIntro()}
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
