import React from 'react';
import './Navigation.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Le Sac Est Prêt</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/dinguerie/">Dinguerie</Nav.Link>
                        <Nav.Link href="/calendar/">Calendrier</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;