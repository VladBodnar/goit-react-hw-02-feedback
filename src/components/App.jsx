import React from 'react';
import SectionTitle from './SectionTitle';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handelClick = event => {
    const { name } = event.currentTarget;
    console.log(name);
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <SectionTitle state={this.state} handelClick={this.handelClick} />
      </div>
    );
  }
}

export default App;
