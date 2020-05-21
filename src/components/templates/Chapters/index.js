import React from 'react';
import PropTypes from 'prop-types';

import {Chapter} from '../../organisms';
import {loaderHoc} from '../../hoc';

const Chapters = ({data}) => (
  <div className='chapters row'>
    {data.map((elm)=>(<Chapter key={elm._id} id={elm._id}/>))}
  </div>
);

Chapters.propTypes={
  data: PropTypes.array,
};

Chapters.defaultProps={
  data: [],
};


export default loaderHoc(Chapters);
