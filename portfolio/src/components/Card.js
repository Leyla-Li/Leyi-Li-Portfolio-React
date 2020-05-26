import React from 'react';
import CardInfo from './ CardInfo';

function Card (props){

  return(
    <div>
      <img className="card-img" src={props.item.imgSrc} />
      {props.item.selected && <CardInfo title={props.item.title} SubTitle={props.item.subTitle} link={props.item.link} />}
    </div> 
  );

}

export default Card;
