import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/index.scss';
import store from './redux/store';
import { Provider } from 'react-redux';
import { 
	BrowserRouter as Router,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App /> 
      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


