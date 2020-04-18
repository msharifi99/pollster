import React from 'react';
import ReactDOM from 'react-dom';
import App from '@@/App/index';

import './stylesheets/index.scss';


const container = document.createElement('div');

container.setAttribute("id","pollster-container");

document.body.appendChild(container);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
