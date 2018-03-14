import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, Badge, NavLink, NavbarBrand, NavbarToggler, Collapse, } from 'reactstrap';
import { NavLink as ReactNavLink } from 'react-router-dom';
import './Header.css';


const HeaderComponent = ({ brandName, toggle, isOpen, menuItemNames }) => {
    const menuItems = menuItemNames.map((item) => {
        return (
            <NavItem key={item.id}>
                <Badge color="info">
                    <ReactNavLink to={item.path}>
                        <NavLink className="menuLbl">
                            {item.name}
                        </NavLink>
                    </ReactNavLink>
                </Badge>
            </NavItem>
        );
    });
    return (
        <Navbar className="fixed-top .App-header" expand="md">
            <ReactNavLink to="/">
                <NavbarBrand>{brandName}</NavbarBrand>
            </ReactNavLink>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {menuItems}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

HeaderComponent.propTypes = {
    brandName: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    menuItemNames: PropTypes.array.isRequired
}

export default HeaderComponent;