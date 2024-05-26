
import { useState } from "react";
import { Navbar, Nav, NavDropdown, Form, Container, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import {DarkModeToggle} from "./DarkMode";

interface Theme {
  theme: string
}

function NavbarCompo(theme: Theme) {
    return (
        <div>
        <Navbar bg = {String(theme.theme)} variant={String(theme.theme)} expand="lg" className="mr-sm-6">
      <Container fluid>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#action1">Education</Nav.Link>
            <Nav.Link href="#action2">Experience</Nav.Link>
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">BardTales</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                IBM Watson - Chatbot
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Skills & Certifications" id="navbarScrollingDropdownSC">
            <NavDropdown.Item href="#action6">Skills</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Certifications</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contact
            </Nav.Link>
            <Nav.Link href="#" disabled>
            <DarkModeToggle theme = {theme.theme}/>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
    )
}

export default NavbarCompo;