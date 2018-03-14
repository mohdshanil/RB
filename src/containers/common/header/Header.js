import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../../../utility/constants';
import HeaderComponent from '../../../components/common/header/Header';

const initialState = {
    isOpen: true,
    menuItemNames: [{
        id: 0,
        name: 'Popular Movies',
        path: '/popularMovies'
    },
    {
        id: 1,
        name: 'My Favourite Movies',
        path: '/favouriteMovies'
    }]
};

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = Object.assign({}, initialState);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { isOpen, menuItemNames } = this.state;
        const brandName = constants.BRAND_NAME;
        return (
            <HeaderComponent brandName={brandName} toggle={this.toggle} isOpen={isOpen} menuItemNames={menuItemNames} />
        )
    }

}

export default connect(null, null)(Header);
