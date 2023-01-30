import React from "react";
import css from "./FeedbackOptions.module.css"
export default function FeedbackOptions({onTitleHandelClickGood, onTitleHandelClickNeutral, onTitleHandelClickBad})  {
   
    return(
        <div>
          <button type="button" onClick={onTitleHandelClickGood} className={css.button}>Good</button>
          <button type="button" onClick={onTitleHandelClickNeutral} className={css.button}>Neutral</button>
          <button type="button" onClick={onTitleHandelClickBad }className={css.button}>Bad</button>  
        </div>
    )

}