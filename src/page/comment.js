import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Table } from 'reactstrap';
import { useHistory } from "react-router-dom";
import getCookie from '../component/getCookie.js';
import { useParams } from "react-router-dom";
import Commentshow from '../component/commentshow.js';
import './comment.css';
const Comment = (props) => {
    const history = useHistory();
    const [score, setScore] = useState()
    const [date, setDate] = useState()
    const [comment1, setComment] = useState()
    const [data, setData] = useState([])
    const { Product_ID } = useParams();

    useEffect(() => {
        axios.get(`http://localhost/api/product/readcomment.php?Product_id=` + Product_ID)
            .then(res => {
                console.log(res.data.records)
                setData(res.data.records)
            })
        var d = new Date();
        setDate(d.getFullYear() + "-" + parseInt(d.getMonth() + 1) + "-" + d.getDate())
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        alert('add comment');
        axios.post(`http://localhost/api/product/insertcomment.php`, JSON.stringify({
            "Score": score,
            "Date": date,
            "Comment": comment1,
            "Customer_id": getCookie("Customer_ID"),
            "Product_id": Product_ID
        }))
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        window.location.reload(false);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Comment</h1>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <p>Score</p>
                            </Col>
                            <Col>
                            <div class="rate">
                                    <input type="radio" id="star5" name="rate" onChange={e => { setScore(e.target.value = 5) }} />
                                    <label for="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" onChange={e => { setScore(e.target.value = 4) }} />
                                    <label for="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" onChange={e => { setScore(e.target.value = 3) }} />
                                    <label for="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" onChange={e => { setScore(e.target.value = 2) }} />
                                    <label for="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" onChange={e => { setScore(e.target.value = 1) }} />
                                    <label for="star1" title="text">1 star</label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Comment</p>
                            </Col>
                            <Col>
                             <textarea  rows="4" cols="70" onChange={e => { setComment(e.target.value) }}> </textarea>
                            </Col>
                        </Row>
                        <Button onClick={handleSubmit} style={{backgroundColor: '#FE1D20'}} type="submit">Comment</Button>
                    </form>
                </Col>
            </Row>
            {/* <Table>
                <thead>
                    <tr>
                        <th>Score</th>
                        <th>Date</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {data.map(d => <Commentshow data={d} />)}
                    </tr>
                </tbody>
            </Table> */}
            <Row>
               <Col>
               <div>
                  {data.map(d => <Commentshow data={d} />)}
               </div>     
               </Col> 
    
            </Row>
            </Container>
      )
}
export default Comment