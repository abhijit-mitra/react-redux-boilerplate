import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/pages/';
import Books from './components/pages/Books';
import Chapters from './components/pages/Chapters';
import Movies from './components/pages/Movies';
import {Header} from './components/organisms';

const App = () => (
  <div className='w-100'>
    <Header/>
    <Route exact path="/" component={Home} />
    <Route exact path="/books" component={Books} />
    <Route exact path="/:bookId/chapters" component={Chapters} />
    <Route exact path="/movies" component={Movies} />
  </div>
);

export default App;
