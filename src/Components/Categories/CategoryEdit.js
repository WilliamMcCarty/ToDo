import React, {useState} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import axios from 'axios'

export default function CategoryEdit(props) {
    const [name, setName] = useState(props.category.Name);
    const [description, setDescription] = useState(props.category.Description);

    //validation hooks
    const [valSummary, setValSummary] = useState('');
    const [nameVal, setNameVal] = useState('');
    const [descVal, setDescVal] = useState('');

    const validate =  (category) => {
        let name = category.Name;
        let desc = category.Description;

        name.length > 25 ? setNameVal('** Max 25 Characters') : setNameVal('')
        desc.length > 50 ? setDescVal('** Max 50 Characters') : setDescVal('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const category = {
            CategoryId: props.category.CategoryId,
            Name: name,
            Description: description
        }

        //validate
        validate(category);

        if(nameVal === '' && descVal === '') {
            axios.put(`http://todo.william-mccarty.com/api/Categories/${props.category.CategoryId}`, category).then(() => {
                props.setEffectTrigger(!props.effectTrigger);
                props.setShowEdit(false);
            })
        }
        else{
            setValSummary('Please correct the errors below.');
        }

    }

    return (
        <Modal show={props.showEdit} onHide={() => props.setShowEdit(false)} size="lg">
            <Modal.Header closeButton className="jumbo">
                <h1>Editing {props.category.categoryName}</h1>
            </Modal.Header>
            <Modal.Body className="jumbo">
            <Form onSubmit={handleSubmit}>
                    {valSummary !== '' &&
                        <div className="alert alert-danger">
                            <strong>{valSummary}</strong>
                        </div>
                    }
                    <Form.Group id="name" className="text-left">
                        <label>Name</label>
                        <Form.Control className="boxShadow" type="text" onChange={(e) => setName(e.target.value)} defaultValue={name} required />
                        <div className="text-danger">
                            {nameVal}
                        </div>
                    </Form.Group>
                    <Form.Group id="description" className="text-left">
                        <label>Description</label>
                        <Form.Control className="boxShadow" type="text" as="textarea" onChange={(e) => setDescription(e.target.value)} defaultValue={description} />
                        <div className="text-danger">
                            {descVal}
                        </div>
                    </Form.Group>
                    <Form.Group id="button" className="text-center">
                        <Button type="submit" style={{borderColor: "black", color: "black"}} className="btn jumbo boxShadow">Update</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
