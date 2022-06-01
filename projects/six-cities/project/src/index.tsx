import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const COUNT_PLACE_CARD = 5;

ReactDOM.render(
  <React.StrictMode>
    <App countPlaceCard = {COUNT_PLACE_CARD} />
  </React.StrictMode>,
  document.getElementById('root'));
