import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import HomeComponent from '../../components/home/HomeComponent';
import * as moviesActions from "../../actions/moviesActions";

const initialState = { page: 1, total_pages: 0, total_results:0, results: [] }

class Home extends Component {

    constructor(props) {
        super(props);
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
            debugger;
            console.log("bottom reached");
            //Increment page counting
            if (this.props.popularMovies.payload.page < 1000) {
                this.props.moviesActions.getAllPopularMovies({ page: this.props.popularMovies.payload.page + 1 });
            }
        } else {
            console.log("not bottom reached");
        }
    }

    shouldComponentUpdate(nextState) {
        return nextState.popularMovies.payload !== this.props.popularMovies.payload;
    }

    componentWillReceiveProps(nextProps) {
        this
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    componentWillMount() {
        this.props.moviesActions.getMovieGenre();
        this.props.moviesActions.getAllPopularMovies({ page: this.props.popularMovies.payload.page });
    }

    componentWillUpdate(nextProps, nextState) {
        //console.log(nextProps.movieGenres);
    }

    render() {
        const {popularMovies, movieGenres  } = this.props;
        debugger;
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