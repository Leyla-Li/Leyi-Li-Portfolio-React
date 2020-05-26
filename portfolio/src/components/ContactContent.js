import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ConatactPage from '../pages/ContactPage';

function ContactContent(props) {
  <Container fluid={true}>
    <Row className="justify-content-center">
      <Col md={8}>
        {props.children}
      </Col>
    </Row>
  </Container>
}

export default ConatactContent;