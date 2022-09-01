
import './App.css';
import './index.css'
import {Form as ClassForm} from "./components-class/Form";
import {Form} from "./components/Form/Form";
import {Count as CountClass} from "./components-class/Count";
import {Count} from "./components/Count";
import {ChildComponent} from "./components/ChildComponent";
import {useState} from "react";
import {Message} from "./components/Message/Message";

function App() {
    const [name, setName] = useState('geek')
    const [count, setCount] = useState(0)
    const arr = ['Alex', 'Dima', 'Ivan']
    const handleChangeName = (ev) => {
      setName(ev.target.value)
    }
  return (
    <div className="Form">
        <h2 style={{backgroundColor: 'green'}}>Class components</h2>
        <CountClass/>
        <ClassForm/>
        <hr/>
        <h2>Function components</h2>
        <Count name={'Violetta'}/>
        <h3>Parent Component</h3>
        <p>{count}</p>
        <input type="text" onChange={handleChangeName}/>
        <h3>Child Component</h3>
        <ChildComponent handleChangeCount={setCount} name={name}/>
        {arr.map((item, ind) => {
            return <p key={ind}>{item}</p>
        })}
        <Form/>
        <Message text={'Props Message'}/>
    </div>
  );
}

export default App;
