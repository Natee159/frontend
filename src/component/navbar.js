import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  CardImg
} from 'reactstrap';

import {
  BrowserRouter as Link
} from "react-router-dom";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
    <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/home">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/admin">Admin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/insert">Insert</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/update">Update</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cart">ตะกร้าสินค้า</NavLink>
              </NavItem>
            </Nav>
            
            <Nav>
              <NavItem>
                <NavLink href="/">เข้าสู่ระบบ</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
    </Navbar>
    );
  }

export default NavBar
