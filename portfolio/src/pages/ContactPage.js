import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

import Title from '../components/Title';
import ContactContent from '../components/ContactContent'

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
      <div>
        <Title title={this.props.title} />
        
        <ContactContent>
          <Form>

          </Form>
        </ContactContent>
      </div>
    );
  }
}

export default ConatactPage;