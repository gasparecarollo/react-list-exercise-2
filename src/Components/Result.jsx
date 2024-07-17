import React from 'react';
import '../App.css';


function Result({ result }) {
    return (
        <>
            <div className="result-statistics1">
                <h2> {result.percentage} </h2>
                <span>{result.title} </span>
                <p>{result.description}</p>
            </div>
        </>
    )
}


export default Result;