import React from 'react'
import '../../App.css'

export default function FilterDone(props) {
    return (
        <div className="text-center m-5">
            <button onClick={() => props.setFilterDone("All")} style={{color: "black", borderColor: "black"}} 
            className="btn btn-outline-info m-1 jumbo boxShadow">All</button>

            <button onClick={() => props.setFilterDone("true")} style={{color: "black", borderColor: "black"}} 
            className="btn btn-outline-info m-1 jumbo boxShadow">Complete</button>

<           button onClick={() => props.setFilterDone("false")} style={{color: "black", borderColor: "black"}} 
            className="btn btn-outline-info m-1 jumbo boxShadow">NotComplete</button>
        </div>
    )
}