import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import Book from '../component/book.js';
import Slide from '../component/slide.js';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost/api/product/show.php`)
      .then(res => {
        console.log(res.data.records)
        setData(res.data.records)
      })
  }, []);

  return (
      <Container>
        <Row>
          <Col xs="12" sm="10">
            <Slide />
            <h1>หนังสือแนะนำ</h1>
            <Row>
              {data.map(d => <Book data={d} />)}
            </Row>
            <p style={{ textAlign: 'right' }}>ดูรายการสินค้าเพิ่มเติม</p>
            <h1>หนังสือขายดี</h1>
            <Row>
              {data.map(d => <Book data={d} />)}
            </Row>
            <p style={{ textAlign: 'right' }}>ดูรายการสินค้าเพิ่มเติม</p>
            <h1>หนังสือออกใหม่</h1>
            <Row>
              {data.map(d => <Book data={d} />)}
            </Row>
            <p style={{ textAlign: 'right' }}>ดูรายการสินค้าเพิ่มเติม</p>
          </Col>
          <Col className="picRight" xs="hide" sm="2" >
            <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight"/>
            <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight"/>
            <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight"/>
            <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight"/>
            <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight"/>
            <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight"/>
            <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight"/>
            <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight"/>
            <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight"/>
            <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight"/>
          </Col>
        </Row>
      </Container>
  );
}

export default Home;
