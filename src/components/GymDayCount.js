import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faCalendar, faBasketballBall } from '@fortawesome/free-solid-svg-icons'

library.add(faDumbbell, faBasketballBall, faCalendar)

const percentToDecimal = (decimal) => {
    return(
        (decimal * 100) + '%'
    ) 
}

const calcGoalProgress = (total, goal) => {
    return(
        percentToDecimal(total/goal)
    )
}
    
const GymDayCount = ({total, lifting, basketball, goal}) => (
    <div className="gym-day-count">
        <div className="total-days">
            <span>{total} </span>
            <FontAwesomeIcon icon="calendar" />
            <span> days</span>
        </div>
        <div className="lifting-days">
            <span>{lifting} </span>
            <FontAwesomeIcon icon="dumbbell" />
            <span> days</span>
        </div>
        <div className="basketball-days">
            <span>{basketball} </span>
            <FontAwesomeIcon icon="basketball-ball" />
            <span> days</span>
        </div>
        <span>
            {calcGoalProgress(total, goal)}
        </span>
    </div>

)



// Same as above but written with ES6 classes


// class GymDayCount extends Component {

//     percentToDecimal(decimal) {
//         return(
//             (decimal * 100) + '%'
//         )
//     } 

//     calcGoalProgress(total, goal) {
//         return (
//             this.percentToDecimal(total/goal)
//         )
//     }

//     render() {
//         return(
//             <div className="gym-day-count">
//                 <div className="total-days">
//                     <span>{this.props.total} days</span>
//                 </div>
//                 <div className="lifting-days">
//                     <span>{this.props.lifting} days</span>
//                 </div>
//                 <div className="cardio-days">
//                     <span>{this.props.cardio} days</span>
//                 </div>
//                 <span>
//                     {this.calcGoalProgress(this.props.total, this.props.goal)}
//                 </span>
//             </div>
//         )
//     }
// }

export default GymDayCount