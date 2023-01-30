import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import css from "./SectionTitle.module.css"
export default function SectionTitle({state, onHandelClickGood, onHandelClickNeutral, onHandelClickBad})  {    
 const { good, neutral, bad } = state ;  
    
      return (
        <div className={css.title}>
          <h2>Please leave feedback</h2>
          <FeedbackOptions 
          onTitleHandelClickGood = {onHandelClickGood}
          onTitleHandelClickNeutral = {onHandelClickNeutral}
           onTitleHandelClickBad = {onHandelClickBad}
          />
          <h2>Statistics</h2>
          <Statistics
              good={good}
              neutral={neutral}
              bad={bad}/>         
        </div>
      );
    
  }


  