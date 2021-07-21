// import logo from './logo.svg';
import './App.css';

const tasks = ['HTML5', 'CSS3', 'JavaScript', 'React']

function App() {
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

  return (
    <div>
      {tasks.map((el) => Task(el))}
    </div>
  );
}

export default App;
