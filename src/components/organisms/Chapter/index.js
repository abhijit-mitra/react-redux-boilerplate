import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Chapter = memo(({id}) => (
  <div className='chapter col-md-6 mb-4'>
    <div className="border-blue w-100 p-3 br-10">
      {id}
    </div>
  </div>
));

Chapter.propTypes={
  id: PropTypes.string.isRequired,
};

export default Chapter;
