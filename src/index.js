import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import App from "../src/components/App/App";
import './styles/global.scss';

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);