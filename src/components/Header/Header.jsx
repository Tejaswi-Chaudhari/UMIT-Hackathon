import {React} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import "./Header.css" ;


const Header = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg"  variant="light" className="main">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav> 
                <Nav>
                <Nav.Link className="link" href="#home">Home</Nav.Link>
                <Nav.Link className="link" href="#about">About</Nav.Link>
                <Nav.Link className="link" href="#timeline">Timeline</Nav.Link>
                <Nav.Link className="link" href="#categories">Categories</Nav.Link>
                <Nav.Link className="link" href="#prizes">Prizes</Nav.Link>
                <Nav.Link className="link" href="#sponsors">Sponsors</Nav.Link>
                <Nav.Link className="link" href="#judges">Judges</Nav.Link>
                <Nav.Link className="link" href="#team">Team</Nav.Link>
                <Nav.Link className="link" href="#faq">FAQ</Nav.Link>
                <Nav.Link className="link" href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
