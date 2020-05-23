import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Container = memo((props) => (
  <div className="p-5 position-relative" style={{top: '68px'}}>
    <div className="row">
      <div className="col-md-10 offset-md-1 min-h-50v w-100">
        {props.children}
      </div>
    </div>
  </div>
));

Container.propTypes={
  children: PropTypes.element.isRequired,
};

export default Container;
