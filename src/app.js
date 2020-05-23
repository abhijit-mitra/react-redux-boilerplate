import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/';
import {Header} from './components/common/organisms';

const App = () => (
  <div className='w-100'>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
