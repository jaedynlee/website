import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import './App.css';

import Home from "./containers/Home";
import Art from "./containers/art/Art";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/art" component={Art} />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
