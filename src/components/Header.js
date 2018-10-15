import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Nav>
                <NavItem style={{margin: '20px'}}>
                    <Link to='/'><h3>Dashboard Page</h3></Link>
                </NavItem>
                <NavItem style={{margin: '20px'}}>
                    <Link to='/vote'><h3>Vote Page</h3></Link>
                </NavItem>
            </Nav>
        )
    }
}

export default Header;