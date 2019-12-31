import React from 'react';

import {ToDo} from '../../organisms';
import {LoaderHOC} from '../../hoc';

const WithLoader=({todos, buckets})=>(
  <div className='todo-list'>
    {Object.entries(todos).map(([key, value])=>(
      <ToDo key={key} id={key}/>
    ))}
  </div>
)

export default LoaderHOC('isFetching')(WithLoader);
