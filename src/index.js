import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import App from "../src/components/App/App";

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

// uruchomic redux devtools
// sprawdzic jak zachowuje się redux po wejściu w bohatera