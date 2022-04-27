import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import App from "./AppContainer";

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);