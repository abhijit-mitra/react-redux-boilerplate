import React, {memo} from 'react';
import PropTypes from 'prop-types';

const style = {
  minHeight: 'inherit',
};

const sizeMap = {
  sm: {
    width: '2rem',
    height: '2rem',
  },
  md: {
    width: '3rem',
    height: '3rem',
  },
  lg: {
    width: '5rem',
    height: '5rem',
  },
};

const Loader = memo(({type, size, align}) => (
  <div className={`${align} w-100 h-100`} style={style}>
    <div
      className={`spinner-border text-${type}`}
      role="status"
      style={sizeMap[size]}
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
));

Loader.defaultProps = {
  type: 'primary',
  size: 'md',
  align: 'center-x-y',
};

Loader.propTypes = {
  type: PropTypes.string,
  align: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Loader;
