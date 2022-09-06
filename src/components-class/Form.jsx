import React from 'react';
import { Button } from './Button';
import { Input } from './Input';

export class Form extends React.Component {
  componentDidMount() {
    console.log('componentDidMount Form');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount Form');
  }
  state = {
    visible: true,
    name: 'Click',
    //name: 'Violetta'
  };
  // changeName = (ev) => {
  //     this.setState({name: ev.target.value})}
  handleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };
  handleChangeName = (ev) => {
    this.setState({ name: ev.target.value });
  };
  render() {
    return (
      // <form>
      //     <hr/>
      //     <p>{this.state.name}</p>
      //     <input type="text" onChange={this.changeName}/>
      //     <button >Submit</button>
      // </form>
      <>
        <h2>Parent Component</h2>
        <button onClick={this.handleVisible}>
          {this.state.visible ? 'hide' : 'visible'}
        </button>
        {this.state.visible && <Button count={0} />}
        <h2>Child Component</h2>
        <Input value={this.state.name} change={this.handleChangeName} />
      </>
    );
  }
}
