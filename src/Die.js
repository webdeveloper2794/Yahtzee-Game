import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 6
  };
  constructor( props ) {
    super( props );
    this.handleClick = this.handleClick.bind( this );
  }
  handleClick() {
    this.props.handleClick( this.props.idx );
  }
  render() {
    const { numberWords, locked, val, disabled, animating } = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if ( locked ) classes += 'Die-locked ';
    if ( animating ) classes += 'Die-rolling';
    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      />

    );
  }
}

export default Die;
