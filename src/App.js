import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import Global from './components/Global';
import India from './components/India';
import IndianStates from './components/IndianStates';

import Header from './components/marginals/Header';
import Footer from './components/marginals/Footer';

const App = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Global />
        </Route>
        <Route path='/india' exact>
          <India />
        </Route>
        <Route path='/indianStates' exact>
          <IndianStates />
        </Route>
        <Redirect to='/' />
      </Switch>
      <Footer scrollToTop={scrollToTop} />
    </BrowserRouter>
  );
};

export default App;
