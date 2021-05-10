import React from 'react';
import Result from './Result';

function MovieResults({results, popup}) {
    return (
        <section className='results'>
            {results.map((result => (
                <Result key = {result.imdbID} result = {result} popup = {popup} />
            )))}
        </section>
    )
}

export default MovieResults
