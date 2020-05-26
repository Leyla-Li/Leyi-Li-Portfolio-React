import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Content(props){
  return(
  <VerticalTimeline>
    
    {props.experience.map((item) => {
      return (<VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(255,215,108)', color: '#A6A6A5' }}
      contentArrowStyle={{ borderRight: '7px solid  #A6A6A5' }}
      date={item.date}
      iconStyle={{ background: 'rgb(255,215,108)', color: '#fff' }}
      icon={item.type === 'work' ? <FontAwesomeIcon icon={faBriefcase} size="lg" /> : <FontAwesomeIcon icon={faGraduationCap} size="lg" />}
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
      <p>
      {item.description}
      </p>
    </VerticalTimelineElement>);
    })}
    
  </VerticalTimeline>
  );
}

export default Content;