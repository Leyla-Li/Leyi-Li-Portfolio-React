import React from 'react';
import Title from '../components/Title';
import Carousel from '../components/Carousel'

function HomePage(props){

  return(
    <div>
      <Title title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
    </div>
  );
}

export default HomePage;