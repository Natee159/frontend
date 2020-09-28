import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';

const Login = () => {
      const [Email, setEmail] = useState()
      const [Password, setPassword] = useState()
      
      const handleSubmit = event => {
            event.preventDefault();
            alert('register');
            axios.post(`http://localhost/api/product/show.php`, JSON.stringify({
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
                              <h1>เข้าสู่ระบบ</h1>
                              <form onSubmit={handleSubmit}>
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
export default Login