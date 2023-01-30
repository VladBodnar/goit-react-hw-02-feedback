import React from 'react';
import SectionTitle from "./SectionTitle"
//  import Statistics from './Statistics';
//  import FeedbackOptions from './FeedbackOptions';
// import Reviews from "./Reviews";
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handelClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handelClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
        <SectionTitle
        state = {this.state}
         onHandelClickGood = {this.handelClickGood}
          onHandelClickNeutral = {this.handelClickNeutral}
           onHandelClickBad = {this.handelClickBad}
        />
        )}}

export default App;
