
import './App.css';

import {Form as ClassForm} from "./components-class/Form";
import {Count} from "./components/Count";
import {ChildComponent} from "./components/ChildComponent";
import {useState} from "react";

function App() {
    const [name, setName] = useState('geek')
    const [count, setCount] = useState(0)
    const handleChangeName = (ev) => {
      setName(ev.target.value)
    }
  return (
    <div className="App">
        <Count name={'Violetta'}/>
        <ClassForm/>
        <hr/>
        <h3>Parent Component</h3>
        <p>{count}</p>
        <input type="text" onChange={handleChangeName}/>
        <h3>Child Component</h3>
        <ChildComponent handleChangeCount={setCount} name={name}/>
    </div>
  );
}

export default App;
