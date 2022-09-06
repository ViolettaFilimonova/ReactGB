import React from 'react';

export class Button extends React.PureComponent {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      count: 1,
    };
  }
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //     if (nextProps.count !== this.props.count){
  //         return true
  //     }
  //     return false
  // }
  componentDidMount() {
    console.log('componentDidMount Button');
    //this.interval = setInterval(() => console.log('1'), 1000)
  }
  componentDidUpdate() {
    console.log('did update Button');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount Button');
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
      </>
    );
  }
}
