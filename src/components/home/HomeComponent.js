import React from 'react';
import { Row, Col, Card, CardImg, CardBody, CardTitle, Container, Label, Input, Badge, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import MovieGenresListComponent from '../home/MovieGenresListComponent';
import { img_Url } from "../../constants";
import FaSearchPlus from 'react-icons/lib/fa/search-plus';

const Home = ({ popularMovies, movieGenres, goToDetails }) => {
    this.generateMovieList = (val) => {
        return (val.genre_ids && val.genre_ids.map(function (genresfilm, index) {
            return (
                <MovieGenresListComponent index= {index} movieGenres={movieGenres} genresfilm={genresfilm}/>
            )
        }, this));
    };

    return (
        <Container>
            <Row>
                <Col md="8" sm="12" xs="12" className="pd520 " >
                    <Label for="exampleSelectMulti" className="homePageHeading">Popular Movies</Label>
                </Col>
                <Col md="4" sm="12" xs="12" className="pd520" >
                    <InputGroup>
                        <Input placeholder="movie name" />
                        <InputGroupAddon addonType="append">
                            <InputGroupText> <FaSearchPlus /> </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                {
                    popularMovies && popularMovies.map(function (val, index) {
                        return (
                            <Col key={index} md="3" xs="12" sm="6" onClick={() => goToDetails(val.id)}  >
                                <Card className="movieTile">
                                    <CardImg top width="100%" src={img_Url + val.poster_path} alt={val.title} />
                                    <CardBody>
                                        <CardTitle>{val.original_title}  </CardTitle>
                                        <div>
                                            {this.generateMovieList(val)}
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    }, this)
                }
            </Row>
        </Container>
    );
}

export default Home;