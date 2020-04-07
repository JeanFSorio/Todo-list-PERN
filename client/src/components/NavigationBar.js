import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    background-color: #222;

    &:hover {
      color: white;
    }
  }
`;

export default function NavigationBar() {


  return (
    <Styles>
      <Navbar expand>
        <Navbar.Brand href="#">My Loved Todos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
                        <Nav.Item>
              <Nav.Link href="/">New Todos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/todos">List Todos</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
