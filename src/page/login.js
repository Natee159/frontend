import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './login.css';
const Login = () => {
      const history = useHistory();
      const [Email, setEmail] = useState()
      const [Password, setPassword] = useState()

      const handleSubmit = event => {
            event.preventDefault();
            axios.get(`http://localhost/api/product/login.php?Email=` + Email + '&Password=' + Password)
                  .then(res => {
                        if (res.data.Status) {
                              alert("ยินดีต้อนรับ")
                              document.cookie = "username=" + res.data.Email + "; path=/"
                              document.cookie = "Customer_ID=" + res.data.Customer_id + "; path=/"
                              history.push("/home")
                              history.go(0)
                        } else {
                              alert("รหัสผ่านไม่ถูกต้อง")
                        }
                  })
      }

      const handleClick = event => {
            history.push("/register");
      }

      return (
            <Container className="c-login">
                  <Row className="login">
                        <Col style={{ color: '#E82038' }} sm="6" className="login-c1">

                              <form onSubmit={handleSubmit}>
                                    <Row>
                                          {/* <Col sm="12" className="login-c6">
                                                <h3 className="h1c"> WELCOME TO</h3>
                                          </Col> */}
                                          <Col Col sm="12" className="login-c7">
                                                <img width={'40%'} src={require('../component/logo.png')} alt="picRight" />

                                          </Col>


                                          <Col sm="12" className="login-c2">
                                                <input type="text" placeholder="Email" style={{ width: '450px' }} onChange={e => { setEmail(e.target.value) }} />
                                          </Col>

                                          <Col sm="12" className="login-c3">
                                                <input type="password" placeholder="password" style={{ width: '450px' }} onChange={e => { setPassword(e.target.value) }} />
                                          </Col>
                                          <Col sm="12" className="login-c4">
                                                <Button className="login-c4-1" style={{ backgroundColor: '#E82038' }} type="submit">Login</Button>
                                          </Col>
                                          <Col sm="12" className="login-c5">
                                                <Button className="login-c4-2" style={{ backgroundColor: '#E82038' }} onClick={handleClick} type="submit">Registers</Button>
                                          </Col>
                                    </Row>



                              </form>
                        </Col>
                        <Col className="login-side" sm="6">
                            


                        </Col>
                  </Row>
            </Container>
      )
}
export default Login