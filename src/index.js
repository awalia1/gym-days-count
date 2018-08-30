import React from 'react'
import ReactDOM from 'react-dom';
import GymDayList from './components/GymDayList'
import './stylesheets/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render
    (<GymDayList days= {
        [
            {
                gym: "LA Fitness-Queens",
                date: new Date("1/3/2018"),
                lifting: true,
                basketball: false
            },
            {
                gym: "LA Fitness-Brooklyn",
                date: new Date("7/19/2018"),
                lifting: false,
                basketball: false
            },
            {
                gym: "LA Fitness-Manhattan",
                date: new Date("12/24/2018"),
                lifting: false,
                basketball: true
            }
        ]
    } />,
    document.getElementById('root'));
registerServiceWorker();
