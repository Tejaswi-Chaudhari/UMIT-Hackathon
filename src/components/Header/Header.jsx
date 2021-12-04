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
                <Nav.Link className="link" href="/about">About</Nav.Link>
                <Nav.Link className="link" href="./Timeline">Timeline</Nav.Link>
                <Nav.Link className="link" href="./Prizes">Prizes</Nav.Link>
                <Nav.Link className="link" href="./Sponsors">Sponsors</Nav.Link>
                <Nav.Link className="link" href="./Judges">Judges</Nav.Link>
                <Nav.Link className="link" href="./Teams">Team</Nav.Link>
                <Nav.Link className="link" href="./Faq">FAQ</Nav.Link>
                <Nav.Link className="link" href="./Footer">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
