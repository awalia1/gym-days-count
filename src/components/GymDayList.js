import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faCalendar, faBasketballBall } from '@fortawesome/free-solid-svg-icons'
import { GymDayRow } from './GymDayRow'

library.add(faDumbbell, faBasketballBall, faCalendar)

const GymDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Gym</th>
                <th>Lifting</th>
                <th>Basketball</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) => <GymDayRow key={i} {...day} />)}
        </tbody>
    </table>
)

export default GymDayList