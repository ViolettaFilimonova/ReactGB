
import './App.css';

import {Form as ClassForm} from "./components-class/Form";
import {Count} from "./components/Count";
import {ChildComponent} from "./components/ChildComponent";
import {useState} from "react";

function App() {
    const [name, setName] = useState('geek')
    const handleChangeName = (ev) => {
      setName(ev.target.value)
    }
  return (
    <div className="App">
        <Count name={'Violetta'}/>
        <ClassForm/>
        <hr/>
        <p>Parent Component</p>
        <input type="text" onChange={handleChangeName}/>
        <p>Child Component</p>
        <ChildComponent name={name}/>
    </div>
  );
}

export default App;
