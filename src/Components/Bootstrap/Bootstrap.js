import React from 'react'
import './Bootstrap.css'
import {Container, Row, Col, Carousel, Accordion, Card, Button} from 'react-bootstrap'
import image from '../../images/background.jpg'
import image2 from '../../images/background2.jpg'
import image3 from '../../images/background3.jpg'



export default function Bootstrap() {
    return (
        <section className="bootstrap">
            <main>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={image} alt="First Slide" />
                        <Carousel.Caption>
                            <h3>Welcome to Bootstrap</h3>
                            <p>npm install react-bootstrap</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src={image2} alt="Second Slide" />
                        <Carousel.Caption>
                            <h3>Each Carousel.Item is a slide</h3>
                            <p>npm install react-bootstrap</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src={image3} alt="Third Slide" />
                        <Carousel.Caption>
                            <h3>Just using Components </h3>
                            <p>npm install react-bootstrap</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <Accordion defaultActiveKey="0" className="m-5">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    STEP 1 - Install the Package
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>npm install react-bootstrap</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    STEP 2 - Import the Components you are using
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <a href="https://react-bootstrap.github.io" target="_blank" rel="noreferrer">Visit react-bootstrap docs</a>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    STEP 3 - Call to the Components
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    Using the code example from their documentation, call to the components as needed to implement the 
                                    Bootstrap functionality in your UI.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Row className="text-center">
                        <Col md={3} className="alert alert-primary">
                        <h4>col-md-3 <hr/>will take up 3 of 12 columns in the grid</h4>
                        </Col>
                        <Col md={6} className="alert alert-danger">
                        <h4>col-md-6 <hr/> will take up 6 of 12 columns in the grid</h4>
                        </Col>
                        <Col md={3} className="alert alert-primary">
                        <h4>col-md-3 <hr/>will take up 3 of 12 columns in the grid</h4>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col md={6} className="alert alert-warning">
                            This will take half of the parent's width.
                        </Col>
                        <Col md={6} className="alert alert-success">
                            This will take half of the parent's width.
                        </Col>
                    </Row>
                </Container>
            </main>
        </section>
    )
}
