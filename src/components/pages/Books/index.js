import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getBooks} from '../../../actions/';
import {Container} from '../../organisms';
import {Search} from '../../molecules';
import {Books as BooksTemplate} from '../../templates';
import {isEmpty} from '../../../utils/generic';

const Books = ({getBooks, books}) => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(()=>{
    getBooks();
  }, [getBooks]);
  const handleSearch = (data)=>{
    setSearchResult(data);
  };
  const {isFetching, error, data} = books;
  const options = (data && data.docs) || [];
  return (
    <Container>
      <>
        <div className="w-100 mb-5">
          <Search
            options = {options}
            searchBy={
              ['name']}
            placeholder='Search here...'
            onSearch = {handleSearch}
          />
        </div>
        <BooksTemplate isFetching={isFetching} error={error} data={isEmpty(searchResult)?options:searchResult}/>
      </>
    </Container>
  );
};

Books.propTypes={
  getBooks: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired,
};

const mapStateToProps=({books})=>({
  books,
});
export default connect(mapStateToProps, {getBooks})(Books);
