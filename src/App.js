import React from 'react';
import styles from './App.module.css';
import cx from 'classnames';
import { Link, animateScroll as scroll } from 'react-scroll';

import { Cards, Chart, CountryPicker, IntroCard, Footer } from './components';
import { fetchData } from './api';

class App extends React.Component {
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

  // Function to scroll to the top
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Rendering the final data
  render() {
    const { data, country } = this.state;
    return (
      <div>
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
            <i
              className={cx(`fas fa-chevron-down fa-2x ${styles.chevron}`)}
            ></i>
          </Link>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
        <Footer scrollToTop={this.scrollToTop} />
      </div>
    );
  }
}

export default App;
