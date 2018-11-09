import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';
import routes from './routes';
import * as serviceWorker from './serviceWorker';
import 'assets/css/application.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {routes.map((prop, key) => {
          return <Route exact={prop.exact || false} path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>, document.getElementById('root')
);
serviceWorker.unregister();
