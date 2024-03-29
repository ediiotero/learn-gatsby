import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
import { Navbar, Nav } from "react-bootstrap"

export default props => (
  <Navbar bg="light" expand="lg" className={headerStyles.header}>
    <Navbar.Brand href="#home">Gatsby-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About Us
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact Us
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
