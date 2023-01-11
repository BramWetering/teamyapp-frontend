import "./Header.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { FaHome } from "react-icons/fa";
// import { BsPersonFill } from "react-icons/bs";
import React from "react";

const Header = (props) => {
  return (
    <div className="header-wrapper">
      <Navbar className="navbar" expand="lg">
        <Link className="link" to="/Kwetter-Frontend">
          <Navbar.Brand>
            {/* <FaHome id="icon" size={50} /> */}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="link" to="/Kwetter-Frontend/profile" >
              {/* <BsPersonFill id="icon" size={50} /> */}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
};

export default Header;