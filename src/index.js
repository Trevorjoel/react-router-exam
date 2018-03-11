import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route } from "react-router-dom";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Featured from "./pages/Featured";
ReactDOM.render((
    <BrowserRouter>
        <div>
        <Route exact path='/' component={App} />
        <Route exact path='/pages/archives/' name="archives" component={Archives} />
        <Route exact path='/pages/archives/:article' name="archives" component={Archives} />
        <Route exact path='/pages/settings' component={Settings} />
        <Route exact path='/pages/featured' component={Featured} />
            </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
