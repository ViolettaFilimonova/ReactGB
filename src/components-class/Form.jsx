import React from "react";
export class Form extends React.Component{
    state = {
        name: 'Violetta',
    }
    changeName = (ev) => {
        this.setState({name: ev.target.value})
    }
    render() {
        return(
        <form>
            <hr/>
            <p>{this.state.name}</p>
            <input type="text" onChange={this.changeName}/>
            <button >Submit</button>
        </form>
        );
    }
}
