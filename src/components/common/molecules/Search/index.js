import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';

import {Input} from '../../atoms';

const Search = memo(({options, onSearch, searchBy, ...rest}) => {
  const [value, setValue] = useState('');
  const handleChange = ({target: {value}})=>{
    setValue(value);
    const searchResult = options.filter((eachOption)=>{
      for (let i=0; i<searchBy.length; i++) {
        const fieldValue = eachOption[searchBy[i]];
        if (typeof(fieldValue) === 'string' || typeof(fieldValue) === 'number') {
          const isExist = String(fieldValue).toLowerCase().includes(value.toLowerCase());
          if (isExist) {
            return true;
          }
        } else if (typeof(fieldValue) === 'object' && fieldValue.constructor === Array) {
          const isExist = fieldValue.some((elm)=>(elm.toLowerCase().includes(value.toLowerCase())));
          if (isExist) {
            return true;
          }
        }
      }
      return false;
    });
    onSearch(searchResult, value);
  };
  return <Input onChange={handleChange} value={value} {...rest}/>;
});

Search.propTypes={
  options: PropTypes.array.isRequired,
  onSearch: PropTypes.func,
  searchBy: PropTypes.array.isRequired,
};

Search.defaultProps={
  onSearch: ()=>{},
};

export default Search;
