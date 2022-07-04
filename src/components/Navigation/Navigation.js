import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import "../../App.scss";

function Navigation() {
    const location = useLocation();
    return (
        <Navbar collapseOnSelect fixed="top" expand="sm" variant="light"  >
            <Container  >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className='m-auto' activeKey={location.pathname} >
                <Nav.Link href="/" style={{color:"white"}} >Home</Nav.Link>
                {/*<Nav.Link href="/jobs" style={{color:"white"}} >Servicios</Nav.Link>*/}
                <Nav.Link href="/testimonial" style={{color:"white"}} >Testimonios</Nav.Link>
                <Nav.Link href="/downloads" style={{color:"white"}} >Descargas</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;