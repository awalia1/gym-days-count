import React, { Component } from 'react'

class GymDayCount extends Component {

    percentToDecimal(decimal) {
        return(
            (decimal * 100) + '%'
        )
    } 

    calcGoalProgress(total, goal) {
        return (
            this.percentToDecimal(total/goal)
        )
    }

    render() {
        return(
            <div className="gym-day-count">
                <div className="total-days">
                    <span>{this.props.total} days</span>
                </div>
                <div className="lifting-days">
                    <span>{this.props.lifting} days</span>
                </div>
                <div className="cardio-days">
                    <span>{this.props.cardio} days</span>
                </div>
                <span>
                    {this.calcGoalProgress(this.props.total, this.props.goal)}
                </span>
            </div>
        )
    }
}

export default GymDayCount