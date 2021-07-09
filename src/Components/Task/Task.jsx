import React from 'react'
import { Button } from "react-bootstrap"
import "./Task.css"
import { useDispatch } from "react-redux"
import { completeTask } from "../../Actions"
import EditTask from '../EditTask/EditTask'

function Task({ taskData, index }) {
    const dispatch = useDispatch();


    
    return (
        
        <div className="task">
                

            <h4 style={{
                        textDecoration: taskData.isDone
                            ? "line-through"
                            : "none",
                            
                    }}
                >
                    Task {index + 1}: {taskData.description} </h4>
                    
            <div className="taskBtns">
                <Button variant={taskData.isDone ? "outline-danger" : "success"} className="done-btn" onClick={() => dispatch(completeTask(taskData.id))}>{taskData.isDone ? "Undo" : "Done"}</Button>
                <EditTask taskData={taskData} />
            </div>
        </div>
    )
}

export default Task
