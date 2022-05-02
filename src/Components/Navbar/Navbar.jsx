import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { logout } from "../../Redux/Actions/authActions";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: "white" }}>
              Football
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/FieldList" style={{ color: "white" }}>
                Fields
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Profile" style={{ color: "white" }}>
                Profile
              </Link>
            </Nav.Link>
            <Nav.Link
              style={{ color: "red" }}
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              LOGOUT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
