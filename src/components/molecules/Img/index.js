import React, {useState, useEffect, memo} from 'react';
import PropTypes from 'prop-types';
import {Loader} from '../../atoms';

const fixedStyle = {
  backgroundSize: '100%',
};

const errorStyle = {
  fontSize: '4rem',
};

const Img = memo(({fallback, ...props}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = props.src;
    img.onload = function() {
      setLoading(false);
    };
    img.onerror = function(err) {
      setError(true);
    };
  }, [props.src]);
  if (error) {
    return fallback;
  } else if (loading) {
    return <Loader size="sm" align={props.align}/>;
  }
  return (
    <img
      {...props}
      style={{...props.style, ...fixedStyle}}
      className="w-100 h-100 relative"
      alt="awign.com"
    />
  );
});

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, () => null]),
  fallback: PropTypes.any,
  style: PropTypes.object,
  align: PropTypes.string,
};
Img.defaultProps = {
  fallback: <i className="fas fa-image gray" style={errorStyle}></i>,
  style: {},
  align: 'center-x-y',
};

export default Img;
