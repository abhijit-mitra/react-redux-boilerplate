import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {Movie} from '../../organisms';
import {loaderHoc} from '../../hoc';

const Movies = memo(({data}) => (
  <div className="row">
    {data.map(({_id, ...rest})=><Movie key={_id} {...rest}/>)}
  </div>
));

Movies.propTypes={
  data: PropTypes.array,
};

Movies.defaultProps={
  data: [],
};

export default loaderHoc(Movies);
