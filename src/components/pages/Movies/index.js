import React, {useEffect, memo, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getMovies} from '../../../actions';
import {Movies as MoviesTemplate} from '../../templates';
import {Container} from '../../organisms';
import {Search, Dropdown} from '../../molecules';
import {isEmpty} from '../../../utils/generic';

const SORT_BY_OPTIONS=[{
  id: 1,
  name: 'Name',
  value: 'name',
}, {
  id: 2,
  name: 'Duration',
  value: 'runtimeInMinutes',
}, {
  id: 3,
  name: 'Budget',
  value: 'budgetInMillions',
}, {
  id: 4,
  name: 'Revenue',
  value: 'boxOfficeRevenueInMillions',
}, {
  id: 5,
  name: 'Academy Awards Nominations',
  value: 'academyAwardNominations',
}, {
  id: 6,
  name: 'Academy Awards',
  value: 'academyAwardWins',
}];

const Movies = memo(({getMovies, movies}) => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(()=>{
    getMovies();
  }, [getMovies]);
  const handleSearch = (data)=>{
    setSearchResult(data);
  };
  const handleSelect = (data)=>{
    let all_movies = isEmpty(searchResult)?[...movies.data.docs]:[...searchResult];
    all_movies = all_movies.sort((a, b)=>(a[data.value]-b[data.value]));
    setSearchResult(all_movies);
  };
  const {isFetching, error, data} = movies;
  const options = (data && data.docs) || [];
  return (
    <Container>
      <>
        <div className="row mb-5">
          <div className="col-md-6">
            <Search
              options = {options}
              searchBy={
                ['name', 'runtimeInMinutes', 'budgetInMillions', 'boxOfficeRevenueInMillions', 'academyAwardNominations', 'academyAwardWins']}
              placeholder='Search here...'
              onSearch = {handleSearch}
            />
          </div>
          <div className="col-md-6">
            <Dropdown
              title='Sort By'
              options={SORT_BY_OPTIONS}
              config={{
                displayValueBy: 'name',
                setValueBy: 'id',
              }}
              onSelect={handleSelect}
            />
          </div>
        </div>
        <MoviesTemplate isFetching={isFetching} error={error} data={isEmpty(searchResult)?options:searchResult}/>
      </>
    </Container>
  );
});

Movies.propTypes={
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
};

const mapStateToProps=({movies})=>({movies});

export default connect(mapStateToProps, {getMovies})(Movies);
