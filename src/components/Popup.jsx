import React from 'react';
import Icon from '@material-ui/core/Icon'; 

function Popup({selected, closePopup}) {
    return (
        <section className='popup'>
            <div className='content'>
                <Icon className = 'closePopup' onClick = {closePopup} style={{ fontSize: 37}}>clearRounded</Icon><br />
                <h2>{selected.Title} <span>({selected.Year})</span></h2>
                <p className='rating'>Rating: {selected.imdbRating} </p><br />
                <div className='plot'>
                    <img src={selected.Poster} alt={selected.Title} />
                    <div className='p'>
                        <p className = 'bold'>{selected.Runtime} | {selected.Genre} | {selected.Language}</p>
                        <p>{selected.Plot}</p>
                        <p className = 'bold'>Actors: {selected.Actors}.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popup
