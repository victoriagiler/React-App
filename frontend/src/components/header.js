import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const header = () => {
  return (
    <header>
      <Navbar bg ="light" variant="light" expand ="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>UJE</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to='/cart'>
            <Nav.Link><span class="material-symbols-outlined">
            shopping_cart
            </span>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link>
            <span class="material-symbols-outlined">
login
</span>login</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
     </Container>
    </Navbar>

    </header>
  )
  
}

export default header
