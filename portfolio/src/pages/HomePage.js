import React from 'react';
import Title from '../components/Title';

function HomePage(props){

  return(
    <Title title={props.title} subTitle={props.subTitle} text={props.text} />
  );
}

export default HomePage;