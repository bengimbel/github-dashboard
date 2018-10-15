import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Nav>
                <NavItem style={{margin: '20px 20px 10px 20px'}}>
                    <Link to='/'><h2>Dashboard</h2></Link>
                </NavItem>
                <NavItem style={{margin: '20px 20px 10px 20px'}}>
                    <Link to='/vote'><h2>Vote</h2></Link>
                </NavItem>
            </Nav>
        )
    }
}

export default Header;