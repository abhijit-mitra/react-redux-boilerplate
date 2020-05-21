import React, {memo} from 'react';
import {useHistory} from 'react-router-dom';

import cover from './lotr_cover.jpg';
import {Img} from '../molecules';
import {Container} from '../organisms';

const CardStyle={
  'height': '100px',
};

const ImgStyle={
  'height': '400px',
};

const Home = memo(() => {
  const history = useHistory();
  const handleBooksClick = ()=>{
    history.push('/books');
  };
  const handleMoviesClick = ()=>{
    history.push('/movies');
  };
  return (
    <Container>
      <div className="row">
        <div className="col-12 mb-5">
          <div className="w-100 br-10 overflow-hidden" style={ImgStyle}>
            <Img src={cover}/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="big-card border-blue br-10 center-x-y cursor-pointer font-20 bold text-blue" style={CardStyle} onClick={handleMoviesClick}>
              Explore Movies
          </div>
        </div>
        <div className="col-md-6">
          <div className="big-card border-blue br-10 center-x-y cursor-pointer font-20 bold text-blue" style={CardStyle} onClick={handleBooksClick}>
              Explore Books
          </div>
        </div>
      </div>
    </Container>
  );
});

export default Home;
