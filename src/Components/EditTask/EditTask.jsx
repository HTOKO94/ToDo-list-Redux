import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Modal, Button, Form } from "react-bootstrap"
import { editTask } from "../../Actions"

function EditTask({ taskData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [newDescription, setNewDescription] = useState(taskData.description)

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(editTask({ id : taskData.id, newDescription: newDescription }))
        handleClose()
    }

    const handleChange = (e) => {
        setNewDescription(e.target.value)
    }


    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" placeholder="Edit task your task here..." defaultValue={taskData.description} onChange={handleChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask