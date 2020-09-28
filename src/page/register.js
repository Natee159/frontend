import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';

const Register = () => {
      const [Firstname, setFirstname] = useState()
      const [Lastname, setLastname] = useState()
      const [Gender, setGender] = useState()
      const [Date_birth, setDate_birth] = useState()
      const [Phone_num, setPhone_num] = useState()
      const [Address, setAddress] = useState()
      const [Email, setEmail] = useState()
      const [Password, setPassword] = useState()
      
      const handleSubmit = event => {
            event.preventDefault();
            alert('register');
            axios.post(`http://localhost/api/product/register.php`, JSON.stringify({
                  "Firstname": Firstname,
                  "Lastname": Lastname,
                  "Gender": Gender,
                  "Date_birth": Date_birth,
                  "Phone_num": Phone_num,
                  "Address": Address,
                  "Email": Email,
                  "Password": Password
            }))
                  .then(res => {
                        console.log(res);
                        console.log(res.data);
                  })
      }

      return (
            <Container>
                  <Row>
                        <Col>
                              <h1>Register</h1>
                              <form onSubmit={handleSubmit}>
                                    <Row>
                                          <Col>
                                                <p>Firstname</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setFirstname(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Lastname</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setLastname(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Gender</p>
                                          </Col>
                                          <Col>
                                                <input type="radio" value="ชาย" onChange={e => { setGender(e.target.value) }} /> ชาย
                                                <input type="radio" value="หญิง" onChange={e => { setGender(e.target.value) }} /> หญิง
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Date_birth</p>
                                          </Col>
                                          <Col>
                                                <input type="date" onChange={e => { setDate_birth(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Phone_num</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setPhone_num(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Address</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setAddress(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Email</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setEmail(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Password</p>
                                          </Col>
                                          <Col>
                                                <input type="password" onChange={e => { setPassword(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Button color="primary" type="submit">Add</Button>
                              </form>
                        </Col>
                  </Row>
            </Container>
      )
}
export default Register