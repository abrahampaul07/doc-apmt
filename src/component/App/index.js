import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import HomPage from '../../pages/home';
import Doctors from '../../pages/doctors';
import AboutUs from '../../pages/about';
import Reservation from '../../pages/reservation';
import ControlPanel from '../../pages/controlPanel';
import Footer from '../footer';
import Error404 from '../../pages/error'; 

import './App.css';
import Patient from '../../pages/patients';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <HomPage />
          <Footer />
        </Route>
        <Route path="/doctors">
          <Header />
          <Doctors />
          <Footer />
        </Route>
        <Route path="/patients">
          <Header />
          <Patient />
          <Footer />
        </Route>
        <Route path="/reservation">
          <Header />
          <Reservation />
          <Footer />
        </Route>
        <Route path="/about">
          <Header />
          <AboutUs />
          <Footer />
        </Route>
        <Route exact path="/CP">
          <ControlPanel />
        </Route>
        <Route path="/*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
