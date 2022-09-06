import React from 'react';

export class Input extends React.Component {
  componentDidUpdate() {
    console.log('componentDidUpdate input');
  }

  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.change}
      />
    );
  }
}
