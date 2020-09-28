import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import Book from '../component/book.js';
import Slide from '../component/slide.js';
import axios from 'axios';

const Colum = (props) => {
  return (
    <Col>
      <Book name={props.name} price={props.price} img={props.img} productID={props.productID} />
    </Col>
  )
}

const Home = () => {
  const [data, setData] = useState([])

  // useEffect(() => {
  //   axios.get(`http://localhost/ApiBookStore/product/select/All.php`)
  //     .then(res => {
  //       console.log(res.data.records)
  //       setData(res.data.records)
  //     })
  // }, []);

  return (
      <Container>
        <Row>
          <Col xs="12" sm="10">
            <Slide />
            <h1>หนังสือแนะนำ</h1>
            <Row>
              {/* {data.map(d => <Colum name={d.Product_Name} price={d.Price} img={d.Image} productID={d.Product_ID} />)} */}
            </Row>
            <p style={{ textAlign: 'right' }}>ดูรายการสินค้าเพิ่มเติม</p>
            <h1>หนังสือขายดี</h1>
            <Row>
              {/* {data.map(d => <Colum name={d.Product_Name} price={d.Price} img={d.Image} productID={d.Product_ID} />)} */}
            </Row>
            <p style={{ textAlign: 'right' }}>ดูรายการสินค้าเพิ่มเติม</p>
            <h1>หนังสือออกใหม่10</h1>
            <Row>
              {/* {data.map(d => <Colum name={d.Product_Name} price={d.Price} img={d.Image} productID={d.Product_ID} />)} */}
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
