import React, { useState, useEffect } from 'react'
import Task from '../Task/Task'
import "./ListTask.css"
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap"

function ListTask() {
    const tasks = useSelector(state => state.tasksReducer.tasks)

    const [tasksList, setTasksList] = useState(tasks)
    const [showDone, setShowDone] = useState(false)
    const [showNotDone, setShowNotDone] = useState(false)

    const handleTasksList = () => {
        
        if (showDone === true) {
            setTasksList(tasks.filter(task => task.isDone === true))
        }
        else if (showNotDone === true) {

            setTasksList(tasks.filter(task => task.isDone === false))
        }
    }
    useEffect(() => {
        handleTasksList()
    }, [showNotDone, showDone, tasks])

    const handleShowDone = () => {
        setShowDone(true)
    }
    const handleShowNotDone = () => {
        setShowDone(false)
        setShowNotDone(true)
    }
    const handleReset = () => {
        setShowDone(false);
        setShowNotDone(false)
    }

    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success" onClick={handleShowDone}>Done</Button>
                <Button variant="outline-danger" onClick={handleShowNotDone} > Not Done</Button>
                <Button variant="info" onClick={handleReset}>Filter Tasks</Button>
            </div>
            {
                showDone === true
                    ? tasksList.map((task, index) => (<Task taskData={task} key={index} index={index} />))
                    : showNotDone === true
                        ? tasksList.map((task, index) => (<Task taskData={task} key={index} index={index} />))
                        : tasks.map((task, index) => <Task taskData={task} key={index} index={index} />)
            }
        </div >
    )
}

export default ListTask
