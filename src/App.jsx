import './App.css';
import { Todo } from './components/Todo';
import {Route,Routes} from "react-router-dom"
import { TodoDetails } from './components/TodoDetails';

function App() {
  return (
    <Routes>
       <Route path="/" element={<Todo/>}></Route> 
       <Route path="/todo/:id" element={<TodoDetails/>}></Route>
    </Routes>
      

      
    
  );
}

export default App;
