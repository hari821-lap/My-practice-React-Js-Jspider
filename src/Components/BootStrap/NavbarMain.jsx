// src/components/NavbarMain.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useCart } from "./CardContext.jsx";

const NavbarMain = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { cart } = useCart();
       

  const handleSearch = (e) => {
    e.preventDefault();
    // navigate to menu with query as param or state
    navigate(`/menu?search=${encodeURIComponent(query)}`);
  };

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">ZomatoClone</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/offers">Offers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/help">Help</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search restaurants or dishes"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              <FaSearch />
            </Button>
          </Form>

          <Nav className="ms-3">
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
              <FaShoppingCart />
              <span className="ms-1">Cart</span>
              <span className="badge bg-danger ms-2">{cart.length}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
