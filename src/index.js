import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Router as HistoryProvider } from 'react-router';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';

import GlobalStyles from './resourses/styles/GlobalStyles';

import App from './App';

export const history = createBrowserHistory();

ReactDOM.render(
  <Fragment>
    <HistoryProvider history={history}>
      <GlobalStyles />
      <App />
    </HistoryProvider>
  </Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
