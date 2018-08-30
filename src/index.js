import React from 'react'
import ReactDOM from 'react-dom';
import GymDayCount from './components/GymDayCount'
import './stylesheets/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<GymDayCount total={50} lifting={20} cardio={10} goal={100} />,
    document.getElementById('root'));
registerServiceWorker();
