import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './register.css';
const Register = () => {
      const history = useHistory();
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
                        history.push("/")
                  })
      }

      return (
            <Container>
                  <Row style={{marginLeft: '260px'}} className="RE1">
                        <Col>
                            
                               <h1 className="h1-re">Register</h1> 
                               
                              
                              <form onSubmit={handleSubmit}>
                                    <Row>
                                          <Col className="input3" sm="12">
                                                <h5>ข้อมูลทั่วไป</h5>
                                          </Col>
                                          <Col className="input1" sm="12">
                                                <p><b>Firstname</b></p>
                                          </Col>
                                          <Col className="input2" sm="12">
                                                <input type="text" onChange={e => { setFirstname(e.target.value) }} />
                                          </Col>
                                    
                                    
                                          <Col className="input1" sm="12">
                                                <b> <p>Lastname</p></b>
                                          </Col>
                                          <Col className="input2" sm="12">
                                                <input type="text" onChange={e => { setLastname(e.target.value) }} />
                                          </Col>
                                    
                                    
                                          <Col className="input1" sm="12"> 
                                                 <b><p>Gender</p> </b>
                                          </Col>
                                          <Col className="input2" sm="12">
                                                <input type="radio" value="ชาย" onChange={e => { setGender(e.target.value) }} /> ชาย
                                                <input type="radio" value="หญิง" onChange={e => { setGender(e.target.value) }} /> หญิง
                                          </Col>
                                    
                                    
                                          <Col className="input1" sm="12">
                                                 <b><p>Date_birth</p> </b>
                                          </Col>
                                          <Col className="input2" sm="12">
                                                <input type="date" onChange={e => { setDate_birth(e.target.value) }} />
                                          </Col>
                                    
                                    
                                          <Col  className="input1" sm="12">
                                                <b><p>Phone_num</p> </b>
                                          </Col>
                                          <Col className="input2" sm="12">
                                                <input type="text" onChange={e => { setPhone_num(e.target.value) }} />
                                          </Col>
                                    
                                    
                                          <Col  className="input1" sm="12">
                                                 <b><p>Address</p> </b>
                                          </Col>
                                          <Col className="input2" sm="12">
                                                <input type="text" onChange={e => { setAddress(e.target.value) }} />
                                          </Col>
                                          <Col className="input3" sm="12">
                                                <h5>ข้อมูลเข้าสู่ระบบ</h5>
                                          </Col>
                                   
                                          <Col className="input1" sm="12">
                                                 <b> <p>Email</p> </b>
                                          </Col>
                                          <Col className="input2" sm="12">
                                                <input type="text" onChange={e => { setEmail(e.target.value) }} />
                                          </Col>
                                    
                                    
                                          <Col className="input1" sm="12"> 
                                               <b><p>Password</p> </b> 
                                          </Col>
                                          <Col className="input2" sm="12">
                                                <input type="password" onChange={e => { setPassword(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    
                                    <Button style={{backgroundColor: '#FE1D20'}} className="button1" type="submit">Add</Button>
                              </form>
                        </Col>
                  </Row>
            </Container>
      )
}
export default Register