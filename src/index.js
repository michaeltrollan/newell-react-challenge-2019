import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Clock from './Clock';
import ColorBox from "./ColorBox";
import Contacts from "./Contacts";

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


ReactDOM.render(<ColorBox />, document.getElementById('colorbox'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<Contacts />, document.getElementById('contacts'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
