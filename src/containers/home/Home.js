import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import HomeComponent from '../../components/home/HomeComponent';
import * as moviesActions from "../../actions/moviesActions";


const defaultStateMovieList = {
    page: 1,
    searchName: "",
    movieList: [],
    genres: []
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, defaultStateMovieList);
        this.handleScroll = this.handleScroll.bind(this);
        this.goToDetails = this.goToDetails.bind(this);
        console.log("its home");
    }

    goToDetails(id) {
        this.props.history.push("/detail/" + id);
    }

    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;

        if (windowBottom >= docHeight) {
            console.log("bottom reached");
            //Increment page counting
            if (this.state.page < 1000) {
                this.setState({
                    page: this.state.page + 1
                }, () => {
                    this.props.moviesActions.getAllPopularMovies({ page: this.state.page });
                })
            }
        } else {
            console.log("not bottom reached");
        }
    }



    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    componentWillMount() {
        this.props.moviesActions.getMovieGenre();
        this.props.moviesActions.getAllPopularMovies({ page: this.state.page });
    }

    componentWillUpdate(nextProps, nextState) {
        //console.log(nextProps.movieGenres);
    }

    componentWillReceiveProps(nextProps) {
        debugger;
    };

    render() {
        const {popularMovies, movieGenres  } = this.props;
        return (
            (popularMovies.payload && movieGenres.payload) &&  <HomeComponent 
            popularMovies={popularMovies.payload.results} 
            movieGenres={movieGenres.payload.genres}
            goToDetails= {this.goToDetails} />
        );
    }
};

const mapStateToProps = (state) => {
    return {
        popularMovies: state.popularMovies,
        movieGenres: state.movieGenres
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        moviesActions: bindActionCreators(moviesActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)