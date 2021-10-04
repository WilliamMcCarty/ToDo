import axios from 'axios';
import React, {useState} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import '../../App.css'

export default function ToDosEdit(props) {
    const [action, setAction] = useState(props.resource.Action);
    const [done, setDone] = useState(props.resource.Done);
    const [categoryId, setCategoryId] = useState(props.resource.CategoryId);
    console.log(props.resource.TodoId)
    const [valSummary] = useState("");
    const [actionVal, setActionVal] = useState("");
    const [setDoneVal] = useState("");

    const validate = (resource) => {
        let action = resource.Action
        let done = resource.Done
       
        action.length > 25 ? 
        setActionVal('** Max 25 Characters') : 
        setActionVal('')
  
        done.length > 75 ? 
        setDoneVal('** Max 75 Characters') :     
        setDoneVal('')    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const resource= {
            TodoId: props.resource.TodoId,
            Action: action,
            Done: done,
            CategoryId: categoryId
        };

        validate(resource);
        axios.put(`http://todo.william-mccarty.com/api/ToDo/${props.resource.TodoId}`, resource).then(() => {
            props.setEffectTrigger(!props.effectTrigger);
            props.setShowEdit(false);
        })
    }


    return (
        <Modal show={props.showEdit} onHide={() => props.setShowEdit(false)} size="lg">
            <Modal.Header closeButton className="jumbo">
                <h1 className="text-center w-100">Edit {action}</h1>
            </Modal.Header>
            <Modal.Body  className="jumbo">
                {/* pated content below */}
                <Form onSubmit={handleSubmit}>
                        {valSummary !== '' &&
                            <div className="alert alert-danger boxShadow">
                                <strong>
                                    {valSummary}
                                </strong>
                            </div>
                        }
                        <Form.Group id="action" className="text-left">
                            <label>Action</label>
                            <Form.Control className="boxShadow" type="text" defaultValue={action} onChange={(e) => setAction(e.target.value)} required />
                            <div className="text-danger">
                                {actionVal}
                            </div>
                        </Form.Group>
                        
                        <Form.Group id="done" className="text-left">
                        <label>Completed</label>
                        <select className="form-control boxShadow" defaultValue={done} onChange={(e) => setDone(e.target.value)} required >
                            
                            <option value="false">False</option>
                            <option value="true">True</option>
                            
                        </select>
                        </Form.Group>   
                        
                        <Form.Group id="cat" className="text-left">
                            <label>Category</label>
                            <select className="form-control boxShadow" defaultValue={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                                {props.categories.map(cat =>
                                    <option key={cat.CategoryId} value={cat.CategoryId}>
                                        {cat.Name}
                                    </option>
                                )}
                            </select>
                        </Form.Group>
                        <Button type="submit" style={{borderColor: "black", color: "black"}} className="btn w-100 boxShadow jumbo">Submit</Button>
                    </Form>
            </Modal.Body>
        </Modal>
    )
}
