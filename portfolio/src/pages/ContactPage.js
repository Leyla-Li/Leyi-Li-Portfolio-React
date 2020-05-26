import React from 'react';
import Title from '../components/Title';

class ConatactPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null
    }
  }

  render(){
    return(
      <Title title={this.props.title} />
    );
  }
}

export default ConatactPage;