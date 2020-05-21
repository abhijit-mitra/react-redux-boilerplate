import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {Book} from '../../organisms';
import {loaderHoc} from '../../hoc';

const Books = memo(({data}) => (
  <div className="row">
    {data.map(({name, _id})=><Book key={_id} name={name} id={_id}/>)}
  </div>
));

Books.propTypes={
  data: PropTypes.array,
};

Books.defaultProps={
  data: [],
};

export default loaderHoc(Books);
