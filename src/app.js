import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/pages/';
import {Header} from './components/organisms';

const App = () => (
  <div className='w-100'>
    <Header/>
    <Route exact path="/" component={Home} />
  </div>
);

export default App;
