import React from 'react';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container>
      <Col md={12}>
        <Image src='images/poster.jpg' alt='event poster' fluid />
        <h1 className='site-title' style={{ fontSize: '3rem', textAlign: 'center' }}>
          {' '}
          THE WILD BOYS CAMPOUT
        </h1>
        <h2 style={{ textAlign: 'center', lineHeight: '2.5rem' }}>
          The Wild Boys Camp-Out was established in 2020 by a bunch of blue collar, beer drinking, eagle riding motorcycle hooligans. We started by spontaneously putting together a casual last minute camp-out that more
          than 100 people attended. When this began we never had the intentions to make it an annual event but because of how memorable the camp-outs turned out, we decided to make this a summer event in hopes of
          bringing even more of the motorcycle community together. The Wild Boys Camp Out welcomes anyone and everyone we just ask that you respect one another, the environment and your surroundings. Stay safe, stay
          wild. ~Wild Boys Camp Out
        </h2>
        <Row className='d-flex justify-content-center align-items-center'>
          <Button className='btn col-4 m-3 rounded' href='https://www.instagram.com/thewildboyscampout/?hl=en' variant='warning' target='_blank'>
            Instagram
          </Button>
          <Button className='btn col-4 m-3 rounded' href='/store' variant='warning'>
            Store
          </Button>
        </Row>
      </Col>
    </Container>
  );
};

export default LandingPage;
