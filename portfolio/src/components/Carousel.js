import React from 'react';
import shesCoding from '../assests/shescoding-homepage.PNG';
import campgroundExplorer from '../assests/campground-explorer-page.PNG';
import caseHawk from '../assests/casehawk-home-page.PNG';


class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items: [
        {
          id: 0,
          title: 'She\'s Coding',
          subTitle: 'A website for women in tech',
          imgSrc: shesCoding,
          link: 'http://projects.shescoding.org/#/projects',
          selected: false
        },
        {
          id: 1,
          title: 'Campground Explorer',
          subTitle: 'A website that helps you find campground around you',
          imgSrc: campgroundExplorer,
          link: 'https://smores-explorer.herokuapp.com',
          selected: false
        },
        {
          id: 2,
          title: 'CaseHawk',
          subTitle: 'A website for small lawfirms',
          imgSrc: caseHawk,
          link: 'https://github.com/JS-401-Final/front-end',
          selected: false
        }
      ]
    }
  }

  render(){
    return(
      <p>this is Carousel</p>
    );
  }
}

export default Carousel;