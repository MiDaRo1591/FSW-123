import ToDoList from './ToDoList.js';
import {arraylist} from './STORE'
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoList arraylist={arraylist}/>
    </div>
  );
}

export default App;
