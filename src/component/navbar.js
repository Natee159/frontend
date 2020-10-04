import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Input,
  Button,
  Form,
  FormGroup,
  Row,
  Col
} from 'reactstrap';
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const toggle = () => setIsOpen(!isOpen);
  const [Type_search, setType_search] = useState();
  const [Product_name, setProduct_name] = useState();
  const handleSubmit = event => {
    event.preventDefault();
    alert(Type_search)
    alert(Product_name)
    history.push("/search/" + Type_search +"/" + Product_name);
  }

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
              <NavLink href="/cart">ตะกร้าสินค้า</NavLink>
            </NavItem>
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
