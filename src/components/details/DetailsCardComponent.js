import React from 'react';
import { Row, Col, Card, CardImg, Badge, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import img_Url from '../../utility/imageConstants';

const DetailsCardComponent = ({ movieDetails }) => {
    return (
        movieDetails &&
        <Card>
            <Row>
                <Col md="5">
                    <CardImg top width="100%" src={img_Url + movieDetails.poster_path} alt="Card image cap" />
                </Col>
                <Col md="7">
                    <CardBody>
                        <CardTitle>{movieDetails.original_title}</CardTitle>
                        <CardSubtitle>{movieDetails.tagline}</CardSubtitle>
                        <CardText>{movieDetails.overview}</CardText>
                        {
                            movieDetails.genres.map(function (geners) {
                                return (
                                    <Badge className="genres" key={geners.id} color="info">{geners.name}</Badge>
                                )
                            })
                        }
                        <CardText>
                            Countries : {
                                movieDetails.production_countries.map(function (countries, index) {
                                    return (
                                        <span key={index}>{countries.name}</span>
                                    )
                                })

                            }
                        </CardText>
                        <CardText>Link : {movieDetails.homepage}</CardText>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    );
}

export default DetailsCardComponent;