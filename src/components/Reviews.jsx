import React from "react";

class Reviews extends React.Component {
    
    
    handelClickGood = () => {
        this.setState(prevState =>{
            return {
                good: prevState.good + 1
            }
        })
    };
    handelClickNeutral = () => {       
        this.setState(prevState =>{
            return {
                neutral: prevState.neutral + 1
            }
        })
    };
    countTotalFeedback = () => {
        return  (this.state.bad + this.state.neutral + this.state.good) ;     
    };
    handelClickBad = () => {
        this.setState(prevState =>({
            bad: prevState.bad + 1
        }))
    };

    countPositiveFeedbackPercentage = () => {
        return (this.state.good/(this.state.bad + this.state.neutral + this.state.good)*100) ;
    }
    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button type="button" onClick={this.handelClickGood}>Good</button>
                <button type="button" onClick={this.handelClickNeutral}>Neutral</button>
                <button type="button" onClick={this.handelClickBad}>Bad</button>
                <h2>Statistics</h2>
                <span>Good{this.state.good}</span>
                <span>Neutral{this.state.neutral}</span>
                <span>Bad{this.state.bad}</span>
                <span>Total{this.countTotalFeedback()}</span>
                <span>Positive feedback{this.countPositiveFeedbackPercentage()}%</span>
            </div>
        )
    }
}
export default Reviews;