import './App.css';
import MyNavbar from './Components/Navbar';
import TaskComponent from './Components/Task';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useState } from 'react';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState({});

    const handleInput = (e) => {
        setTask({ name: e.target.value, completed: false, id: Date.now() });
    }

    const addTask = (task) => {
        setTodoList([...todoList, task]);
        setTask({});
    }

    const completeTask = (id) => {
        setTodoList(todoList.map((task) => {
            return task.id === id ? { ...task, completed: true } : task
        }))
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter((t) => t.id !== id));
    }

    return (
        <div className="App">
            <MyNavbar title="Task Tracker" />
            <div className="addTask mt-4 mb-4">
                <input className='me-2' value={task.name || ''} type="text" placeholder="Add Task" onChange={handleInput}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            addTask(task);
                        }
                    }} />
                <button onClick={() => addTask(task)}>Add task</button>
            </div>

            <div className="container list">
                {console.log(todoList)}
                {todoList.map((task) => (
                    <TaskComponent
                        key={task.id}
                        task={task}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    )
}

export default App;


/**
<div className='row align-items-center mb-2'>
                            <h1 className='col-sm-6 me-4' key={task.id}
                                style={
                                    {
                                        backgroundColor: task.completed ? 'green' : 'red',
                                        color: task.completed ? 'black' : 'white',
                                        padding: '10px',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }
                                }
                            >{task.name}</h1>

                            <button type='button' className='btn btn-danger col-sm-2' onClick={() => deleteTask(task.id)}
                                style={
                                    {
                                        height: '100%',
                                        padding: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }
                                }
                            >Delete</button>

                            <button type='button' className='mx-3 btn btn-success col-sm-2' onClick={() => completeTask(task.id)}
                                style={
                                    {
                                        height: '100%',
                                        padding: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }
                                }
                            >Complete</button>
                        </div>

 */