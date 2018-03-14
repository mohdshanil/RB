import React from 'react';
import { Row, Col, Card, CardText, CardBody, CardTitle, Button, CardHeader, CardFooter } from 'reactstrap';
import DetailsCardComponent from './DetailsCardComponent';
import "./DetailsComponent.css";

const DetailsComponent = ({ movieDetails }) => {
    return (
        movieDetails && 
        <Row>
            <Col md="8" xs="12" sm="12">
                <DetailsCardComponent movieDetails={movieDetails} />
            </Col>
            <Col md="4" xs="12" sm="12">
                <Card>
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                    <CardFooter>Footer</CardFooter>
                </Card>
            </Col>
        </Row>
    );
};

export default DetailsComponent;