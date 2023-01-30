import React from "react";
import css from "./Statistics.module.css"
export default function Statistics({good, neutral, bad}) {

    const countTotalFeedback = () => {
        return  (bad + neutral + good) ;     
    };  

    const countPositiveFeedbackPercentage = () => {
        return ( Math.ceil(good/(bad + neutral + good)*100) );
    };  
        return    ( good + neutral + bad > 0 ? (<div>
            <span className={css.statisticsValue}>Good {good} </span>
             <span className={css.statisticsValue}>Neutral {neutral} </span>
             <span className={css.statisticsValue}>Bad {bad} </span>
             <span className={css.statisticsValue}>Total {countTotalFeedback()} </span>
             <span className={css.statisticsValue}> Positive feedback {countPositiveFeedbackPercentage()}%</span> 
         </div>):( <span className={css.statisticsValue}> There is no feedback </span>)
          )                 
        
}

