import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap-v4 
import "./assets/scss/style.scss"
import "./assets/vendor/font-awesome/css/font-awesome.min.css"

import Index from './views/Index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Index />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
