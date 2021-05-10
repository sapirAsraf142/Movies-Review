import React from 'react';

function Result({result, popup}) {
    return (
        <div className="result" onClick = {() => popup(result.imdbID)}>
            <img src={result.Poster} alt = {result.Title} />
            <h3>
            {result.Title} <br /><br />
            {result.Year} <br /><br />
            {result.Type}
            </h3>
        </div>
    )
}

export default Result
