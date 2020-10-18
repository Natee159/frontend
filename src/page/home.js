import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import Book from '../component/book.js';
import Slide from '../component/slide.js';
import Slide2 from '../component/slide2.js';
import getCookie from '../component/getCookie.js';
import axios from 'axios';
import './home.css';
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  useEffect(() => {
    axios.get(`http://localhost/api/product/showrate.php`)
      .then(res => {
        console.log(res.data.records)
        setData(res.data.records)
      })
    axios.get(`http://localhost/api/product/showsale.php`)
      .then(res => {
        console.log(res.data.records)
        setData2(res.data.records)
      })
    axios.get(`http://localhost/api/product/shownew.php`)
      .then(res => {
        console.log(res.data.records)
        setData3(res.data.records)
      })
    if (getCookie("username") === "") {
      history.push("/")
    }
  }, []);

  const handleClick = () => {
    history.push("/allbookrate");
  }
  const handleClick1 = () => {
    history.push("/allbooksale");
  }
  const handleClick2 = () => {
    history.push("/allbooknew");
  }

  return (
    <Container>
      <Row className="head">
        <Col xs="12" sm="9">
          <Slide />
          <h3>หนังสือแนะนำ</h3>
          <Row>
            {data.map(d => <Book data={d} />)}
          </Row>
          <p onClick={handleClick} style={{ textAlign: 'right' }}>ดูรายการสินค้าเพิ่มเติม>></p>
          <h3>หนังสือขายดี</h3>
          <Row>
            {data2.map(d => <Book data={d} />)}
          </Row>
          <p onClick={handleClick1} style={{ textAlign: 'right' }}>ดูรายการสินค้าเพิ่มเติม>></p>
          <h3>หนังสือออกใหม่</h3>
          <Row>
            {data3.map(d => <Book data={d} />)}
          </Row>
          <p onClick={handleClick2} style={{ textAlign: 'right' }}>ดูรายการสินค้าเพิ่มเติม>></p>
        </Col>

        <Col className="picRight" xs="hide" sm="3" >
        <Slide2 />
          <img width={'100%'} src={require('../component/pic/b5.png')} alt="picRight" />
          <img width={'100%'} src={require('../component/pic/b6.png')} alt="picRight" />
          <img width={'100%'} src={require('../component/pic/b7.png')} alt="picRight" />
          <img width={'100%'} src={require('../component/pic/b8.png')} alt="picRight" />
          <img width={'100%'} src={require('../component/pic/b9.png')} alt="picRight" />
          <img width={'100%'} src={require('../component/pic/b10.png')} alt="picRight" />
          <img width={'100%'} src={require('../component/pic/b11.png')} alt="picRight" />
          {/* <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight" />
          <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight" />
          <img width={'100%'} src={require('../component/pic/b4.PNG')} alt="picRight" /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
