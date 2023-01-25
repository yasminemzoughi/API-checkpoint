import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">API</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
