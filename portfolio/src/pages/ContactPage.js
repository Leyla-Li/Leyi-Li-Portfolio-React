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
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} />
            </Form.Group>

            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
              Send
            </Button>

            {this.state.emailSent ? <p className="d-inline success-msg">Email Sent</p> : <p className="d-inline err-msg">Email Not Sent</p>} 

          </Form>
        </ContactContent>
      </div>
    );
  }
}

export default ConatactPage;