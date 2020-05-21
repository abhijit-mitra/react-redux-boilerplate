import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import {Img} from '../../molecules';
import bookLogo from './lotr.jpg';
import './style.css';

const BookStyle={
  height: '200px',
};

const Book = ({name, id}) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/${id}/chapters`);
  }
  return (
    <div className='col-md-4 mb-4'>
      <div className="book cursor-pointer w-100 position-relative border-blue overflow-hidden br-10"
        onClick={handleClick}>
        <div className="position-relative w-100 p-2" style={BookStyle}>
          <Img src={bookLogo}/>
        </div>
        <div className="name position-relative d-flex align-items-center justify-content-center w-100 h-100 p-3 text-blue bold">
          {name}
        </div>
      </div>
    </div>
  );
};

Book.propTypes={
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
