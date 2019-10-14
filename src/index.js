import React from 'react';
import ReactDOM from 'react-dom';
import { Router as HistoryProvider } from 'react-router';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';

import App from './App';

import GlobalStyles from './resourses/styles/GlobalStyles';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-circular-progressbar/dist/styles.css';


export const history = createBrowserHistory();

ReactDOM.render(
  <HistoryProvider history={history}>
    <GlobalStyles/>
    <App/>
  </HistoryProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
