import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../../helpers/getHeroesByName';
import { useForm } from '../../../hooks/useForm';
import { HeroCard } from '../hero-detail/HeroCard';
import './search-results.css'

export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const queryString = require('query-string');
  const { q='' } = queryString.parse(location.search);

  const [ {searchText}, handleInputChange ] = useForm( { searchText: q, } );
  const filteredHeroes = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault()
    if( searchText.trim().length <= 0) { return;}
    navigate(`?q=${searchText}`)
  }

  return (
    <div className="app-container container">
       <h1> Search your hero </h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr/>

          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search a hero"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-success mt-2 w-100"
            >
              Search
            </button>
          </form>
        </div>
         <div className="col-7 result-cards">
          <h4>Results</h4>
          <hr/>
          {
            (q === '')
              ? <div className="alert alert-info"> Search a hero </div>
              : (filteredHeroes.length === 0) 
                && <div className="alert alert-danger"> No results founds for: { q } </div>
          }
          <div className="filtered-cards">
            {
              filteredHeroes.map( hero => (
                <HeroCard 
                  key={hero.id}
                  {...hero}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};
