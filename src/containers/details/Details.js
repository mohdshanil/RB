import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moviesActions from '../../actions/moviesActions';
import DetailsComponent from '../../components/details/DetailsComponent';

class Details extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        const { movieDetails } = this.props;
        return (
            <DetailsComponent movieDetails={movieDetails}/>
        );
    };

    componentWillMount() {
        this.props.match.params.id ?
            this.props.moviesActions.getMovieDetails({ id: this.props.match.params.id }) :
            this.props.history.push('/home');
    };
};

const mapStateToProps = (state) => {
    ;
    return {
        movieDetails: state.movieDetails.payload
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        moviesActions: bindActionCreators(moviesActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);