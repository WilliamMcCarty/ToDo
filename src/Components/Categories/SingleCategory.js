import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {useAuth} from '../../contexts/AuthContext'
import CategoryEdit from './CategoryEdit'

library.add(fas);

export default function SingleCategory(props) {
    const {currentUser} = useAuth();
    const [showEdit, setShowEdit] = useState(false);

    return (
        <>
        <tr>
            <td>{props.category.Name}</td>
            <td>{props.category.Description}</td>
            {currentUser.email === 'williammccarty1@outlook.com' &&
                <td>
                    <button className="m-1 rounded jumbo" id="editLink" onClick={() => setShowEdit(true)}>
                        <FontAwesomeIcon icon={['fas', 'edit']} />
                    </button>
                    <button className="m-1 rounded jumbo" id='deleteLink' onClick={() => {
                        if(window.confirm(`Are you sure you want to delete ${props.category.Name}`))
                        {
                                props.deleteCategory(props.category)
                        }
                    }}> 
                        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                    </button>
                </td>
            }
        </tr>
        {showEdit &&
           <CategoryEdit
                category={props.category}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
                effectTrigger={props.effectTrigger}
                setEffectTrigger={props.setEffectTrigger} />
        }
       </>
    )
}
