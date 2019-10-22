import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";
import {BrowserRouter} from "react-router-dom";
import styles from "styled-components";
import {initMiddleware} from "axios";

// initMiddleware();

ReactDOM.render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
document.getElementById('root')
);


serviceWorker.unregister();
