import Modal from './components/Modal/Modal';
import { useState } from 'react';
import classes from './App.module.css'
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import TodoCard from './components/TodoCard/TodoCard';
import MyComponent from "./components/Input/Input";

function App() {

  const [ isShow, setIsShow ]  = useState(false)
  const [ newTask, setNewTask ] = useState('');
  const [ search, setSearch ] = useState('');
  const [ tasks, setTasks ] =  useState([
    {
      id: 1,
      title: 'Coding',
      completed: false
    },
    {
      id: 2,
      title: 'Eat',
      completed: false
    },
    {
      id: 3,
      title: 'Sleep',
      completed: false
    },
    {
      id: 4,
      title: 'Coding',
      completed: false
    },
  ]);

  const handleShow = () => setIsShow(!isShow)

  const handleAddTask = () => {
    if (newTask.length < 1) return;

    setTasks((prevState) => [
      ...prevState,
      {
        id: Date.now(),
        title: newTask,
        completed: false
      }
    ]);
    setNewTask('');
    handleShow();
  }

  const handleDone = (id) => {
    const newList = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed }
      } else {
        return task
      }
    })
    setTasks(newList);
  }

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

  return (
      <>
        <Container>
          <div className={classes.wrapper}>
            {isShow && <Modal handleAddTask={handleAddTask} setNewTask={setNewTask} handleShow={handleShow} />}
            <Button handleClick={handleShow}><p>Добавить</p></Button>
            <input name='search' placeholder='Поиск...' onChange={handleSearch} />
            {filteredTasks.map(task =>
                <TodoCard
                    handleDone={handleDone}
                    handleDelete={handleDelete} // pass handleDelete as a prop
                    key={task.id}
                    task={task}
                />
            )}
          </div>
          
        </Container>
      </>
  );
}

export default App;