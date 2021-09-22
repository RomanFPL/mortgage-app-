import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../path to node modules/../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import cn from 'classnames';
import InterestPage from './components/interestPage';
import Navbar from './components/navBar';

const App = () => {
  return (
      <>
        <Navbar/>
    <div className="container p-4">
        <InterestPage/>
    </div>
    </>
   );
}

ReactDOM.render(<App/>, document.getElementById('root')
);
