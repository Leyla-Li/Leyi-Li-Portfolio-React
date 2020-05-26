import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import shesCoding from '../assests/shescoding-homepage.PNG';
import campgroundExplorer from '../assests/campground-explorer-page.PNG';
import caseHawk from '../assests/casehawk-home-page.PNG';

import Card from './Card';


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

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id){
        item.selected = false;
      }
    });

    this.setState({items});
  }

  makeItems = items => {
    return items.map(item => {
      return <Card item={item} click={(e => {this.handleCardClick(item.id, e)})} key={item.id} />
    })
  }


  render(){
    return(
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;