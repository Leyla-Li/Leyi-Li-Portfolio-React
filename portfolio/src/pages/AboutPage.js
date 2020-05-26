import React from 'react';
import Title from '../components/Title';

function HomePage(props){

  return(
    <div>
      <Title title={props.title}/>
    </div>
  );
}

export default HomePage;