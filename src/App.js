import React from 'react';
import styles from './App.module.css';
import cx from 'classnames';
import { Link } from 'react-scroll';

import { Cards, Chart, CountryPicker, IntroCard, Footer } from './components';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

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
      <div className={styles.container}>
        <IntroCard />
        <Cards data={data} />
        <Link
          activeClass='active'
          to='countryPicker'
          spy={true}
          offset={-70}
          duration={500}
          smooth={true}
        >
          <i className={cx(`fas fa-chevron-down fa-2x ${styles.chevron}`)}></i>
        </Link>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
