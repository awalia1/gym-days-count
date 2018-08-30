import React, { Component } from 'react'
// import './stylesheets/index.css'

class GymDayCount extends Component {
    render() {
        return(
            <div className="gym-day-count">
                <div className="total-days">
                    <span>5 days</span>
                </div>
                <div className="cardio-days">
                    <span>2 days</span>
                </div>
                <div className="lifting-days">
                    <span>1 weight lifting day</span>
                </div>
            </div>
        )
    }
}

export default GymDayCount