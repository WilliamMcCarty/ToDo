import React, {useState} from 'react'
import '../../App.css'
import '../../../src/Components/ToDos/ToDos.css'
import checkMark from '../../images/checkmark.png'
import xMark from '../../images/xmark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {useAuth} from '../../contexts/AuthContext'
import ToDosEdit from './ToDosEdit'

library.add(fas);

export default function SingleResource(props) {
    const {currentUser} = useAuth();
    const [showEdit, setShowEdit] = useState(false);

    return (
        <div className="singleResource col-md-5 m-4 boxShadow">
            <h3 className="textShadow">{props.resource.Action}</h3>
            {props.resource.Description !== null ? 
                <p className="textShadow">I Need To: {props.resource.Action}</p> :
                <p className="textShadow">No Action Provided</p>
            }
            {props.resource.Done === true ?
                <p className="" style={{fontWeight: "bolder", color: "green"}}>
                    <img src={checkMark} style={{width: "5%", height: "5%"}} alt="Check Mark" /> Task Completed 
                    </p> :
                <p className="" style={{fontWeight: "bolder", color: "red"}}>
                    <img src={xMark} style={{width: "5%", height: "5%"}} alt="Check Mark" /> Task Not Completed
                    </p>
            }

            {currentUser.email === 'williammccarty1@outlook.com' &&
                <div>
                    <button id="editLink" onClick={() => setShowEdit(!showEdit)}>
                        <FontAwesomeIcon icon={['fas', 'edit']} />
                    </button>
                    <button id="deleteLink" onClick={() => {
                        if(window.confirm(`Are you sure you want to delete ${props.resource.Action}?`))
                        {
                            props.deleteResource(props.resource)
                        }
                    }}>
                        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                    </button>
                </div>
            }

            <ToDosEdit resource={props.resource} showEdit={showEdit} setShowEdit={setShowEdit} setEffectTrigger={props.setEffectTrigger} 
            categories={props.categories} effectTrigger={props.effectTrigger}/>

            {/* <a href={props.resource.Url} target="_blank" rel="noreferrer" className="btn buttonChange">
                Visit {props.resource.LinkText}
            </a> */}            
        </div>
    )
}
