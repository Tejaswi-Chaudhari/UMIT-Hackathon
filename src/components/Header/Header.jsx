import {React} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import "./Header.css" ;



const Header = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg"  className="main">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className="link" href="#about-comp">About</Nav.Link>
                <Nav.Link className="link" href="#timeline">Timeline</Nav.Link>
                <Nav.Link className="link" href="#prizes">Prizes</Nav.Link>
                <Nav.Link className="link" href="#judges">Judges</Nav.Link>
                <Nav.Link className="link" href="#mentors">Mentors</Nav.Link>
                <Nav.Link className="link" href="#teams">Team</Nav.Link>
                <Nav.Link className="link" href="#sponsors">Sponsors</Nav.Link>
                <Nav.Link className="link" href="#community">Community</Nav.Link>
                <Nav.Link className="link" href="#faq-comp">FAQ</Nav.Link>
                <Nav.Link className="link" href="#footer">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
