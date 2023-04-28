/* const TaskComponent = (props) => {
    return (
        <div className='row align-items-center mb-2'>
            <h1 className='col-sm-6 me-4' key={props.task.id}
                style={
                    {
                        backgroundColor: props.task.completed ? 'green' : 'red',
                        color: props.task.completed ? 'black' : 'white',
                        padding: '10px',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                }
            >{props.task.name}</h1>

            <button type='button' className='btn btn-danger col-sm-2' onClick={() => props.deleteTask(props.task.id)}
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

            <button type='button' className='mx-3 btn btn-success col-sm-2' onClick={() => props.completeTask(props.task.id)}
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
    )
}

export default TaskComponent; */

import React, { useState } from "react";

const TaskComponent = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.task.completed);

  const handleComplete = () => {
    setIsCompleted(true);
    props.completeTask(props.task.id);
  };

  return (
    <div className="row align-items-center mb-2">
      <h1
        className="col-sm-6 me-4"
        key={props.task.id}
        style={{
          backgroundColor: isCompleted ? "green" : "red",
          color: isCompleted ? "black" : "white",
          padding: "10px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: isCompleted ? "line-through" : "none",
        }}
      >
        {props.task.name}
      </h1>

      <button
        type="button"
        className="btn btn-danger col-sm-2"
        onClick={() => props.deleteTask(props.task.id)}
        style={{
          height: "100%",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Delete
      </button>

      <button
        type="button"
        className={`mx-3 btn col-sm-2 ${
          isCompleted ? "btn-secondary" : "btn-success"
        }`}
        onClick={isCompleted ? null : handleComplete}
        disabled={isCompleted}
        style={{
          height: "100%",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isCompleted ? "Completed" : "Complete"}
      </button>
    </div>
  );
};

export default TaskComponent;
