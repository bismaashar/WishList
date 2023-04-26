import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
import {useEffect, useState} from 'react'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks , setTasks] = useState([
    {
        id: 1 ,
        text: "Mid Prep" ,
        date: "April 8th" ,
        time: "2 : 30pm",
        priority: 4
    },

    {
        id: 2 ,
        text: "Quiz prep" ,
        date: "April 6th" ,
        time: "8 : 30pm",
        priority: 1
    },

    {
        id: 3 ,
        text: "Iftaar prep" ,
        date: "April 10th" ,
        time: "5 : 30pm",
        priority: 2
    }
  ]);

  //Add Task
  const Add = (task) => {

    const id = 5;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Remove Task
  const Remove = (id) => {

    setTasks(tasks.filter((task) => task.id !== id))
  }

  const onUpdate = (id, pri) => {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {

        return {...task, priority: pri};
      }
      return task;
    });

    setTasks(updatedTasks);
  }
  

  function toTop(id) {

    const taskToTop = tasks.find((task) => task.id === id);

    setTasks((prevTasks) => [taskToTop, ...prevTasks.filter((task) => task.id !== id),]);
  }

  return (
    <div className="wishlist"> 
     <Header onAdd = {() => setShowAddTask(!showAddTask)} />
     {showAddTask &&
      <AddTask onAdd = {Add}/>
     }
     <Task tasks = {tasks} onDelete = {Remove} onUpdate = {onUpdate} changeTop = {toTop} />
    </div>
  );
}

export default App;
