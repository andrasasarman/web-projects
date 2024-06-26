import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState, useEffect} from 'react';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() =>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    
    getTasks();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3000/tasks');
    const data = await res.json();
    return data;
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  //Add task
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) +1;
    // const newTask = {id, ...task};
    // setTasks([...tasks, newTask]);
    const res = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json();

    setTasks([...tasks, data]);
  }
  
  //Delete task
  const onDelete = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      
      <Routes>
      <Route path='/' element={
        
          <>
          {showAddTask && <AddTask onAdd={addTask}/>}
          {tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder}/>
          : 'No tasks to show'
          }
          </>
        
      }></Route>
      <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
