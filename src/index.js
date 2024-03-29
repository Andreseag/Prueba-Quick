import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import MovieRow from './MovieRow';
import Results from './Results';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/movies" component={MovieRow} />
            <Route path="/results" component={Results} />   
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
