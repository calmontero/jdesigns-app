import React, { useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import "../../App.scss";

function Navigation() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} fixed="top" expand="sm" variant="light"  >
            <Container  >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
            <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className='m-auto' activeKey={location.pathname} >
                <Link to="/" className="nav-links" activeClassName="selected" onClick={() => setExpanded(false)} >Home</Link>
                <Link to="/testimonial" className="nav-links" onClick={() => setExpanded(false)}>Testimonios</Link>
                <Link to="/downloads" className="nav-links" onClick={() => setExpanded(false)}>Descargas</Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;