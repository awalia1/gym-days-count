import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faCalendar, faBasketballBall } from '@fortawesome/free-solid-svg-icons'

library.add(faDumbbell, faBasketballBall, faCalendar)

export const GymDayRow = ({gym, date, lifting, basketball}) => (
    <tr>
        <td>
            {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
        </td>
        <td>
            {gym}
        </td>
        <td>
            {(lifting) ? <FontAwesomeIcon icon="dumbbell" /> : null}
        </td>
        <td>
            {(basketball) ? <FontAwesomeIcon icon="basketball-ball" /> : null}
        </td>
    </tr>
)

// does not work. Look up why.
// export default GymDayRow
