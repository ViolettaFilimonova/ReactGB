import React from 'react';

export class Count extends React.Component {
  state = {
    count: 1,
    arr: ['Ivanov', 'Petrov', 'Sidarov'],
  };
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        {this.state.arr.map((item, ind) => {
          return <p key={ind}>{item}</p>;
        })}
        <p>Count state: {this.state.count}</p>
        <p>Count props: {this.props.count}</p>
        <button type="button" onClick={this.handleClick}>
          click
        </button>
      </div>
    );
  }
}
