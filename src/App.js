import React, {useState} from 'react';
import SearchMovie from './components/SearchMovie';
import axios from 'axios';
import MovieResults from './components/MovieResults';
import Popup from './components/Popup';

function App() {
  const [searchData, setSearchData] = useState({
    sMovie: '',
    results: [],
    selected: {}
  });

  const apiurl = 'http://www.omdbapi.com/?apikey=f968cbec';

  const handleSearchInput = (e) => {
    let sMovie = e.target.value;
    setSearchData(prevState => {
      return { ...prevState, sMovie : sMovie}
    })
  }

  const searchFuncEnter = (e) => {
    if(e.key === "Enter"){
      axios(apiurl + "&s=" + searchData.sMovie).then(({data})=> {
        let results = data.Search;
        setSearchData(prevState => {
          return {...prevState, results: results}
        })
        if(results === undefined){
          alert('This movie was not found, please try another movie.');
        }
      });
    }
  }

  const searchFuncClick = () => {
    axios(apiurl + "&s=" + searchData.sMovie).then(({data})=> {
      var results = data.Search;
      setSearchData(prevState => {
        return {...prevState, results: results}
      })
      if(results === undefined){
        alert('This movie was not found, please try another movie.');
      }
    })
  }

  const popup = (id) => {
    axios(apiurl + '&i=' + id).then(({data}) => {
      let result = data;
      console.log(result);
      setSearchData(prevState => {
        return {...prevState, selected: result}
      });
    });
  }

  const closePopup = () => {
    setSearchData(prevState => {
      return {...prevState, selected: {}}
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movies Review</h1>
      </header>
      <main>
        <SearchMovie handleSearchInput = {handleSearchInput} searchFuncClick = {searchFuncClick} searchFuncEnter = {searchFuncEnter} />
        {(typeof searchData.results !== 'undefined') ? <MovieResults results = {searchData.results} popup = {popup}/> : null}
        {(typeof searchData.selected.Title !== 'undefined') ? <Popup selected = {searchData.selected} closePopup = {closePopup} /> : null}
      </main>
    </div>
  );
}

export default App;