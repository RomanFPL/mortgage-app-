import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../path to node modules/../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";


import InterestPage from './components/interestPage';
import Navbar from './components/navBar';
import CalcInterest from './components/calcPage';
import HistPage from './components/histPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FireBaseContext } from './services/firebaseContext';
import Firebase from './services/firebase';


const App = () => {
  return (
    <FireBaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route>
          <>
            <Navbar/>
            <div className="container p-4 overflow-block">
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
      </FireBaseContext.Provider>
   );
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root')
);
