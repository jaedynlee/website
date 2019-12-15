import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';

import NavigationBar from "./components/NavigationBar";
import Footer from './components/Footer'
import Home from "./containers/Home";
import Experience from "./containers/Experience";
import Education from "./containers/Education";
import Leadership from "./containers/Leadership";
import Art from "./containers/Art";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + "/experience"} component={Experience} />
        <Route exact path={process.env.PUBLIC_URL + "/education"} component={Education} />
        <Route exact path={process.env.PUBLIC_URL + "/leadership"} component={Leadership} />
        <Route exact path={process.env.PUBLIC_URL + "/art"} component={Art} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
