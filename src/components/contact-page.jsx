import React from 'react';

import { Jumbotron as Jumbo, Container, Col, Row } from 'react-bootstrap';
import contact_image from '../time-lapse-photo-of-stars-on-night-924824.jpg';

export const ContactPage = () => {
    return(
        <div>
        <Jumbo fluid className="jumbo" style={{
            paddingBottom: "5rem",
            background: `url(${contact_image}) no-repeat fixed bottom`,
            backgroundSize: "cover",
            position: "relative",
            zIndex: -2,
            color: "#ccc"}}>
            <div  className="overlay"></div>
            <Container  style={{marginLeft: "16rem"}}>
                <h1 style={{color: "#fff"}}>Contact Us</h1>
            </Container>
        </Jumbo>
        <div>
        <Row>
            <Col></Col>
            <Col xs={6}>
                <h4 >Questions or comments? Please contact our team through our 
                    <a href="https://groups.google.com/forum/#!forum/encode-ccre-registry" target="_blank"> Google Group</a>.
                </h4>
            </Col>
            <Col></Col>
            <Col></Col>
        </Row>
            
        </div>
        </div>
    )
}
