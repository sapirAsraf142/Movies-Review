import React from 'react';
import Icon from '@material-ui/core/Icon';

function SearchMovie({handleSearchInput, searchFuncEnter, searchFuncClick}) {
    return (
        <div>
            <section className='searchBox-warp'>
                <input type="text" placeholder = 'Search for a movie...' onKeyPress={searchFuncEnter} onChange={handleSearchInput} className="searchbox"/>
                <button className = 'searchBtn' onClick={searchFuncClick}><Icon style={{ fontSize: 30, color: 'gray'}}>search</Icon></button>
            </section>
        </div>
    )
}

export default SearchMovie
