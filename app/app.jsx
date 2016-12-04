import './logo_favicon.jpg';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { URL } from './constants/AppConstants';
import Page from './components/Page';
import GeneralInformation from './pages/GeneralInformation'
import Partners from './pages/Partners'
import Stages from './pages/Stages'
import Links from './pages/Links'
import WorkGroup from './pages/WorkGroup'
import NMUinProject from './pages/NMUinProject'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path={URL.main} component={Page}>
      <IndexRoute component={GeneralInformation}/>
      <Route path={URL.generalInformation} component={GeneralInformation}/>
      <Route path={URL.partners} component={Partners}/>
      <Route path={URL.stagesOfExecution} component={Stages}/>
      <Route path={URL.usefulLinks} component={Links}/>
      <Route path={URL.workGroup} component={WorkGroup}/>
      <Route path={URL.nmuInProject} component={NMUinProject}/>
    </Route>
  </Router>, document.getElementById('app')
);
