import {React} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import "./Header.css" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faUser, faList, faAward, faTrophy, faPoll, faQuestion, faCalendarAlt, faAddressBook } from "@fortawesome/free-solid-svg-icons"

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
                <Nav.Link className="link" href="#events">Timeline</Nav.Link>
                <Nav.Link className="link" href="#team">Categories</Nav.Link>
                <Nav.Link className="link" href="#tests">Prizes</Nav.Link>
                <Nav.Link className="link" href="#blog">Sponsors</Nav.Link>
                <Nav.Link className="link" href="#contact">Judges</Nav.Link>
                <Nav.Link className="link" href="#contact">Team</Nav.Link>
                <Nav.Link className="link" href="#contact">FAQ</Nav.Link>
                <Nav.Link className="link" href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
