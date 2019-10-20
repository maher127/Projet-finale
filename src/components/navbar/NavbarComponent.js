import React from "react";
import { Component } from "react";
import "./navbar.css";

import { Nav, Navbar, Container, Image } from "react-bootstrap";

class NavbarComponent extends Component {
  render() {
    return (
      <Container className="navbarmenu">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <Image src="https://www.needhelp.com/images/pourcombien.png"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link href="#home">Devenez Membre</Nav.Link>
              <Nav.Link href="#poster">Poster un besoin</Nav.Link>
              <Nav.Link href="#link1">Inscription</Nav.Link>
              <Nav.Link href="#link2">Connexion</Nav.Link>
              <Nav.Link href="#link3">Entreprise</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavbarComponent;
