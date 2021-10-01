import React, { useState, useEffect } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "../../App.css";
import "../ToDos/ToDos.css";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import sampleResources from "../../Utilities/sampleResources";
import SingleResource from "./SingleResource";
import ToDoCreate from "./ToDoCreate"
import FilterCat from './FilterCat'

export default function ToDos() {
  const { currentUser } = useAuth();
  const [resources, setResources] = useState(sampleResources);
  const [categories, setCategories] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [effectTrigger, setEffectTrigger] = useState(false);
  const [filter, setFilter] = useState(0);

  const getResources = () => {
    axios.get("http://todo.william-mccarty.com/api/ToDo").then((response) => {
      setResources(response.data);
    });
  };

  const addToDo = (resource) => {
    console.log(resource);
    axios.post('http://todo.william-mccarty.com/api/ToDo', resource).then(response => {
        //create temp collection
        let updatedResources = resources;
        //update temp object
        updatedResources.push(response.data);
        //update state
        setResources(updatedResources);
        //get resources from the api
        setEffectTrigger(!effectTrigger);
        //toggle te form closed
        setShowCreateForm(false);
    })
  }

  const deleteResource = (resource) => {
    //update the db using axios
    axios.delete(`http://todo.william-mccarty.com/api/ToDo/${resource.TodoId}`).then(() => {
        let updatedResources = resources;
        let index = updatedResources.findIndex(x => x.ResourceId === resource.ResourceId);
        updatedResources.splice(index, 1);
        setResources(updatedResources);
        setEffectTrigger(!effectTrigger);
    })
}

    const getCategories = () => {
        axios.get('http://todo.william-mccarty.com/api/Categories').then(response => { setCategories(response.data)})
    }

    useEffect(() => {
        getResources();
        getCategories();
    }, [effectTrigger])

  return (
    <section className="resources">
      <Jumbotron className="bg-info m-2 jumbo">
        <h1 className="text-center textShadow">Resources Dashboard</h1>
      </Jumbotron>
      {currentUser.email === 'williammccarty1@outlook.com' &&
                <div className="resourceOptions text-center bg-dark p-3 jumbo">
                    <button className="btn jumbo boxShadow" style={{color: "black", border: "black"}} onClick={() => setShowCreateForm(!showCreateForm)}>
                        {!showCreateForm ? 'Create New ToDo' : 'Cancel'}
                    </button>
                    <div className="createContainer">
                        {showCreateForm &&
                            <ToDoCreate
                                categories={categories}
                                resources={resources}
                                addResource={addToDo} />
                        }
                    </div>
                </div>
            }

      <FilterCat setFilter={setFilter} categories={categories}/>

      <Container>
        <article className="resourceGallery row justify-content-center">
        {filter ===0 ? 
                    resources.map(x => 
                        <SingleResource key={x.TodoId} resource={x} 
                        deleteResource={deleteResource}
                        effectTrigger={effectTrigger}
                        setEffectTrigger={setEffectTrigger}
                        categories={categories}/>
                    ) : 
                    resources.filter(x => x.CategoryId === filter).map(x => 
                        <SingleResource key={x.TodoId} resource={x} 
                        deleteResource={deleteResource}
                        effectTrigger={effectTrigger}
                        setEffectTrigger={setEffectTrigger}
                        categories={categories}/>
                    )
                    }
                    
                    {filter !== 0 && resources.filter(resource => resource.CategoryId === filter).length === 0 &&
                        <h2 className="alert alert-warning text-dark">There are no results in this category.</h2>
                    }
        </article>
      </Container>
    </section>
  );
}
