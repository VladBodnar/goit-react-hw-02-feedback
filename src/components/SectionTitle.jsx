import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import css from './SectionTitle.module.css';
class SectionTitle extends React.Component {
  render() {
    const { good, neutral, bad } = this.props.state;
    const countTotalFeedback = () => {
      return bad + neutral + good;
    };
    const countPositiveFeedbackPercentage = () => {
      return Math.ceil((good / (bad + neutral + good)) * 100);
    };
    return (
      <div className={css.title}>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.props.handelClick}
        />
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default SectionTitle;
