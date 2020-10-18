import React, { useState, useEffect } from 'react';
import './navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Input,
  Button,
  Form,
  FormGroup,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import getCookie from './getCookie.js';

const NavBar = (props) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [Type_search, setType_search] = useState();
  const [Product_name, setProduct_name] = useState();
  const [user, setUser] = useState()
  const toggle = () => setIsOpen(!isOpen);

  const handleSubmit = event => {
    event.preventDefault();
    history.push("/search/" + Type_search +"/" + Product_name);
    history.go(0)
  }

  const logout = () => {
    document.cookie = "username=; path=/;"
    document.cookie = "Customer_ID=; path=/;"
    history.push("/")
    history.go(0)
  }

  const editdata = () => {
    history.push("/updatedata")
  }

  useEffect(() => {
    setUser(getCookie("username"))
  }, []);

  return (
    <Navbar className="navbar" style={{backgroundColor: '#1C2833'}}  light expand="md">
      <Container>
        <NavbarBrand style={{color: '#FEFDFD'}} href="/home">Home</NavbarBrand>
        <NavbarToggler className="tog" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav    className="mr-auto" navbar>
            <NavItem>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col sm="4" className="col11">
                    <FormGroup>
                      <Input style={{height:"32px"}} onChange={e => { setType_search(e.target.value) }} type="select" name="selectMulti" id="exampleSelectMulti">
                      <option value="" selected disabled hidden>Choose here</option>
                        <option value="Product_name">ชื่อหนังสือ</option>
                        <option value="Author_name">ชื่อผู้แต่ง</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="7" className="col12">
                    <Input className="input" style={{height: "33px"}} type="text" onChange={e => { setProduct_name(e.target.value) }} />
                  </Col>
                  <Col sm="1" className="col13">
                    <Button className="button" style={{backgroundColor: '#FE1D20'}} > Submit</Button>
                  </Col>
                </Row>
              </Form>
            </NavItem>
          </Nav>

          <Nav>
            <NavItem>
              <NavLink style={{color: '#FEFDFD'}} href="/cart">ตะกร้าสินค้า</NavLink>
            </NavItem>
            {
              getCookie("username") === "" ?
              <NavItem>
                <NavLink  href="/">เข้าสู่ระบบ</NavLink>
              </NavItem> :
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{color: '#FEFDFD'}} nav caret>
              {user}
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                <NavItem>
                <NavLink  href="/history">ประวัติสั่งซื้อ</NavLink>

              </NavItem>
                </DropdownItem>
                <DropdownItem>
                <NavItem>
                <NavLink onClick={logout} href="#">ออกจากระบบ</NavLink>
              </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            }
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
