import React from 'react'
import '../../App.css'

export default function FilterCat(props) {
    return (
        <div className="text-center m-5">
            <button onClick={() => props.setFilter(0)} style={{color: "black", borderColor: "black"}} 
            className="btn btn-outline-info m-1 jumbo boxShadow">All</button>

            <button onClick={() => props.setFilter(-1)} style={{color: "black", borderColor: "black"}} 
            className="btn btn-outline-info m-1 jumbo boxShadow">Completed</button>

            <button onClick={() => props.setFilter(-2)} style={{color: "black", borderColor: "black"}} 
            className="btn btn-outline-info m-1 jumbo boxShadow">Not Completed</button>

            {props.categories.map(cat => 
                <button key={cat.CategoryId} onClick={() => props.setFilter(Number(cat.CategoryId))} 
                style={{color: "black", borderColor: "black"}}
                className="btn btn-outline-info m-1 jumbo boxShadow">{cat.Name}</button>
            )}
        </div>
    )
}
