import React, { useState, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import '../../../src/App.css'

export default function ToDoCreate(props) {
  const actionRef = useRef();
  const doneRef = useRef();
  const catRef = useRef();
  
  const [valSummary, setValSummary] = useState("");
  const [actionVal, setActionVal] = useState("");
  const [doneVal, setDoneVal] = useState("");
 
  const validate = (resource) => {
      let action = resource.Action
      let done = false

      action.length > 50 ? 
      setActionVal('** Max 50 Characters') : 
      setActionVal('')    

  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const resource = {
        Action: actionRef.current.value,
        Done: doneRef.current.value,
        CategoryId: catRef.current.value
    }

        validate(resource);

        if(actionVal === '' ){
            props.addResource(resource);
        }
        else {
            setValSummary('Correct the inputs below to submit the ToDo.')
        }

  };

  return (
    <article className="createResource m-3 text-white align-items-center boxShadow">
      <Card bg="dark" className=" jumbo textShadow" style={{color: "black"}}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <h1 className="m-2">Create New ToDo</h1>
            <br />
            {valSummary !== "" && (
              <div className="alert alert-danger">
                <strong>{valSummary}</strong>
              </div>
            )}
            <Form.Group id="name" className="text-left">
              <label>Name</label>
              <Form.Control className=" boxShadow" type="text" ref={actionRef} required />
              <div className="text-danger">{actionVal}</div>
            </Form.Group>       
            <Form.Group id="done" className="text-left">
              <label>Completed</label>
              <select className="form-control boxShadow" ref={doneRef} required>
                
                  <option value="false">False</option>
                  <option value="true">True</option>
                
              </select>
            </Form.Group>     
            <Form.Group id="cat" className="text-left">
              <label>Category</label>
              <select className="form-control boxShadow" ref={catRef} required>
                {props.categories.map(cat => 
                  <option key={cat.CategoryId} value={cat.CategoryId}>
                    {cat.Name}
                  </option>
                )}
              </select>
            </Form.Group>
            <Button type="submit" className="btn w-100 jumbo textShadow boxShadow" style={{color: "black", border: "black"}}>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </article>
  );
}
