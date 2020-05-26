import React from 'react';
import Title from '../components/Title';
import Content from '../components/Content';

function AboutPage(props){

  return(
    <div>
      <Title title={props.title}/>
      <Content experience={props.experience} />
    </div>
  );
}

export default AboutPage;