import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Error = memo(({msg}) => (
  <div className="w-100">
    <div className="alert alert-danger" role="alert">
      {msg}
    </div>
  </div>
));

Error.defaultProps={
  msg: 'Sorry Something Went Wrong, please try again!',
};

Error.propTypes={
  msg: PropTypes.string,
};


export default Error;
