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
  Container
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
          <NavbarBrand href="/">Home</NavbarBrand>
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
            </Nav>
            <Nav>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                เข้าสู่ระบบ
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/login">เข้าสู่ระบบ</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/register">สมัครสมาชิก</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
    </Navbar>
    );
  }

export default NavBar
