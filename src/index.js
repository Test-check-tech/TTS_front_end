import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'

import Maths from './Reports/Maths/mathsreport';
import exampleReport from './Reports/Example/examplereport'
import App from './App';


import './index.css';
import './App.css';

function Root1() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/maths" component={Maths} />
          <Route path="/parentExample" component={exampleReport} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </div>
  )
}
ReactDOM.render(<Root1 />, document.getElementById('root'));

serviceWorker.unregister();
