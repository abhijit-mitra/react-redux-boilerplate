import React, {memo} from 'react';

import cover from './lotr_cover.jpg';
import {Img} from '../common/molecules';
import {Container} from '../common/organisms';

const CardStyle={
  'height': '100px',
};

const ImgStyle={
  'height': '400px',
};

const Home = memo(() => {
  return (
    <Container>
      <div className="row">
        <div className="col-12 mb-5">
          <div className="w-100 br-10 overflow-hidden" style={ImgStyle}>
            <Img src={cover}/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="big-card border-blue br-10 center-x-y cursor-pointer font-20 bold text-blue" style={CardStyle}>
              Explore Movies
          </div>
        </div>
        <div className="col-md-6">
          <div className="big-card border-blue br-10 center-x-y cursor-pointer font-20 bold text-blue" style={CardStyle}>
              Explore Books
          </div>
        </div>
      </div>
    </Container>
  );
});

export default Home;
