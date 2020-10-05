import React, { useState, useEffect } from 'react';
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
  Col
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
    alert(Type_search)
    alert(Product_name)
    history.push("/search/" + Type_search +"/" + Product_name);
    history.go(0)
  }

  const logout = () => {
    document.cookie = "username=; path=/;"
    document.cookie = "Customer_ID=; path=/;"
    history.push("/")
    history.go(0)
  }

  useEffect(() => {
    setUser(getCookie("username"))
  }, []);

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/home">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/admin">Admin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/insert">Insert</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/update">Update</NavLink>
            </NavItem> */}
            <NavItem>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input onChange={e => { setType_search(e.target.value) }} type="select" name="selectMulti" id="exampleSelectMulti">
                        <option value="Product_name">ชื่อหนังสือ</option>
                        <option value="Author_name">ชื่อผู้แต่ง</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <Input type="textarea" onChange={e => { setProduct_name(e.target.value) }} />
                  </Col>
                  <Col>
                    <Button>Submit</Button>
                  </Col>
                </Row>
              </Form>
            </NavItem>
          </Nav>

          <Nav>
            <NavItem>
              {user}
            </NavItem>
            <NavItem>
              <NavLink href="/cart">ตะกร้าสินค้า</NavLink>
            </NavItem>
            {
              getCookie("username") === "" ?
              <NavItem>
                <NavLink href="/">เข้าสู่ระบบ</NavLink>
              </NavItem> :
              <NavItem>
                <NavLink onClick={logout} href="#">ออกจากระบบ</NavLink>
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
