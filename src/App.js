import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="toDoList">
      <div className='toDoList-principal'>
        <h1>My task</h1>
        <TaskList />
      </div>

    </div>
  );
}

export default App;
