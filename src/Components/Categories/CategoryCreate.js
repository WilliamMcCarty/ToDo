import React, {useRef, useState} from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import '../../../src/App.css'

export default function CategoryCreate(props) {
    
    //create the refs
    const nameRef = useRef();
    const descRef = useRef();

    //validation hooks
    const [valSummary, setValSummary] = useState('');
    const [nameVal, setNameVal] = useState('');
    const [descVal, setDescVal] = useState('');

    const validate =  (category) => {
        let name = category.Name;
        let desc = category.Description;
        
        desc.length > 50 ? setDescVal('** Max 50 Characters') : setDescVal('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const category = {
            Name: nameRef.current.value,
            Description: descRef.current.value
        };

        validate(category);

        if(nameVal === '' && descVal === ''){
            props.addCategory(category);
        }
        else{
            setValSummary('Correct the inputs below to submit the category.')
        }
    }
    
    return (
        <article className="createCategory m-2 align-item-center jumbo boxShadow">
            <Card className="jumbo textShadow" style={{color: "black"}}>
                <Form onSubmit={handleSubmit} className="p-4 bg-dark text-white jumbo" style={{color: "black"}}>
                    <h1 className="m-2 textShadow" style={{color: "black"}}>Create New Category</h1>
                    <br />
                    {valSummary !== '' &&
                        <div className="alert alert-danger">
                            <strong>{valSummary}</strong>
                        </div>
                    }

                    <Form.Group id="name" className="text-left">
                        <label style={{color: "black"}}>Name</label>
                        <Form.Control  className=" boxShadow" type="text" ref={nameRef} required />
                        <div className="text-danger">{nameVal}</div>
                    </Form.Group>
                    <Form.Group id="description" className="text-left">
                        <label style={{color: "black"}}>Description</label>
                        <Form.Control  className=" boxShadow" as="textarea" type="text" ref={descRef} required />
                        <div className="text-danger">{descVal}</div>
                    </Form.Group>
                    <Form.Group id="button" className="text-center">
                       <Button type="submit" className="btn jumbo boxShadow" style={{color: "black", border: "black"}}>Create</Button>
                    </Form.Group>
                </Form>
            </Card>
        </article>
    )
}
