import React from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';


export default function Content(props) {
    return (
        <div>
            <Container fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={8} sm={12}>
                        { props.title && <h1 className='dispaly-1 font-weight-bolder'>{props.title}</h1> }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
