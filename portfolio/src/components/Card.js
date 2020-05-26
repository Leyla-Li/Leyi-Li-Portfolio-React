import React from 'react';
import CardInfo from './ CardInfo';

function Card (props){

  return(
    <div className="d-inline-block g-card" onClick={e => props.click(props.item)}>
      <img src={props.item.imgSrc} width="40%" height="60%" />
      {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
    </div> 
  );

}

export default Card;
