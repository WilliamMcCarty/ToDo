import React, {useState, useEffect} from 'react'
import '../../App.css'
import {Jumbotron, Container} from 'react-bootstrap'
import sampleCategories from '../../Utilities/sampleCategories'
import './Categories.css'
import axios from 'axios'
import {useAuth} from '../../contexts/AuthContext'
import CategoryCreate from './CategoryCreate'
import SingleCategory from './SingleCategory'

export default function Categories() {
    const [categories, setCategories] = useState(sampleCategories);
    const {currentUser} = useAuth();
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [effectTrigger, setEffectTrigger] = useState(false);
    const getCategories = () => {
        axios.get('http://todo.william-mccarty.com/api/Categories').then(response => {
            setCategories(response.data)
        })
    }

    const addCategory = (category) => {
        axios.post('http://todo.william-mccarty.com/api/Categories', category).then(response => {
            let updatedCategories = categories;
            updatedCategories.push(response.data);
            setCategories(updatedCategories);
            setEffectTrigger(!effectTrigger);
            setShowCreateForm(false);
        })
    }

    useEffect(() => {
        getCategories();
    }, [effectTrigger])
  return (
    <section className="categories jumbo">
            <Jumbotron className="bg-info m-2 jumbo">
                <h1 className="text-center textShadow">Categories Dashboard</h1>
            </Jumbotron>
            <div className="bg-dark mb-3 p-3 jumbo">
                {(currentUser.email === 'williammccarty1@outlook.com' && showCreateForm) ?
                    <>
                    <button onClick={() => setShowCreateForm(false)} style={{border: "black", color: "black"}} className="btn jumbo boxShadow">Cancel</button> 
                    <CategoryCreate categories={categories} addCategory={addCategory} />
                    </> :
                    <button onClick={() => setShowCreateForm(true)} style={{color: "black", border: "black"}} className="btn jumbo boxShadow">Create New Category</button>
                }
            </div>
            <Container>
                <table className="table table-striped table-light rounded mt-3 mb-3 jumbo border boxShadow">
                    <thead className="bg-info text-uppercase jumbo">
                        <tr>
                            <th className="textShadow">Name</th>
                            <th className="textShadow">Description</th>
                        </tr>
                    </thead>
                    <tbody className="textShadow border">
                        {categories.map(cat => 
                            <SingleCategory key={cat.CategoryId} category={cat} />
                        )}
                    </tbody>
                </table>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><brt/><br/><br/>
            </Container>
        </section>
  );
}
