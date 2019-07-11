import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Scrape from './Scrape';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Scrape} />
      <Route exact path='/app' component={App} />      
    </div>
  </Router>,
  document.getElementById('root')
);


