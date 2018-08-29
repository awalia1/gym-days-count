import React from 'react'
import './stylesheets/index.css'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'
// import ReactDOM from 'react-dom';
// import './index.css';
// import Greetings from './lib';
import registerServiceWorker from './registerServiceWorker';

render(
    <div>
        {hello}
        {goodbye}
    </div>, 
    document.getElementById('root'));
registerServiceWorker();
