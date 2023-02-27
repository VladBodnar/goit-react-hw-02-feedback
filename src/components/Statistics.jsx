import React from 'react';
import css from './Statistics.module.css';
class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        {good + neutral + bad > 0 ? (
          <div>
            <span className={css.statisticsValue}>Good {good} </span>
            <span className={css.statisticsValue}>Neutral {neutral} </span>
            <span className={css.statisticsValue}>Bad {bad} </span>
            <span className={css.statisticsValue}>Total {total} </span>
            <span className={css.statisticsValue}>
              {' '}
              Positive feedback {positivePercentage}%
            </span>
          </div>
        ) : (
          <span className={css.statisticsValue}> There is no feedback </span>
        )}
      </div>
    );
  }
}
export default Statistics;
