import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import "./AddTask.css"
import { useDispatch } from "react-redux"
import { addTask } from "../../Actions"

function AddTask() {

    const [newTask, setNewTask] = useState("")

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (newTask) {
            dispatch(addTask({description:newTask}))
            setNewTask("");
        }
        else alert("Empty task, please enter task")

    }

    return (
        <div className="AddTask">
            <h1>Todo App!</h1>
            <div className="addField">
                <Form.Control id='addTaskInput' size="lg" type="text" placeholder="Add task..." value={newTask} onChange={handleChange} />
                <Button variant="outline-primary" onClick={handleSubmit} style={{ border: "2px white solid", color: "white" }}>Add</Button>
            </div>
        </div>
    )
}

export default AddTask
