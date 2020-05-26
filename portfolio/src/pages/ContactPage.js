import React from 'react';

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
      <p>Here is the contact page</p>
    );
  }
}

export default ConatactPage;