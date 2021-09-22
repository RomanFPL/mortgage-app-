import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../path to node modules/../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";


import cn from 'classnames';
import InterestPage from './components/interestPage';
import Navbar from './components/navBar';
import CalcInterest from './components/calcPage';
import HistPage from './components/histPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
      <Switch>
        <Route>
          <>
            <Navbar/>
            <div className="container p-4">
              <Switch>
              <Route path="/" exact component={InterestPage}/>
              <Route path="/interests" activeClassName="active" component={InterestPage}/>
              <Route path="/calculate" activeClassName="active" component={CalcInterest}/>
              <Route path="/history" activeClassName="active" component={HistPage}/>
              </Switch>
            </div>
          </>
        </Route>
      </Switch>
   );
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root')
);
