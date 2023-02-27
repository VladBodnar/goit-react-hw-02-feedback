import React from 'react';
import css from './Section.module.css';
class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css.title}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
