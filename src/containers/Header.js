import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';

const Header = () => {
    return (
      <Navbar style={{paddingInline:'40px'}} expand="lg" variant='dark' bg='dark'>
        <Container fluid>
          <Navbar.Brand style={{fontWeight:'600'}} href={"/"}>BookStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href={"/"}>Home</Nav.Link>
              <Nav.Link href={"/search"}>Books</Nav.Link>
            </Nav>
            <Nav
              className="ms-auto my-2 my-lg-0 pe-3"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href={"/login"}>Login</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
      </Navbar>
    )
}

export default Header
