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
        <Route exact path="/jaedynlee.github.io" render={() => <Redirect to="/" />} />
        <Route exact path="/" component={Home} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/leadership" component={Leadership} />
        <Route exact path="/art" component={Art} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
