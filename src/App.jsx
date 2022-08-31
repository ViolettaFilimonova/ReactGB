
import './App.css';

import {Form as ClassForm} from "./components-class/Form";
import {Count} from "./components/Count";

function App() {
  return (
    <div className="App">
        <Count name={'Violetta'}/>
        <ClassForm/>
    </div>
  );
}

export default App;
