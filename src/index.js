import React from 'react'
// import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import GymDayCount from './components/GymDayCount'
import './stylesheets/index.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GymDayCount />,
    document.getElementById('root'));
registerServiceWorker();
