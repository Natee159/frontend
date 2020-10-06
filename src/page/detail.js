import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './detail.css';
import { useParams } from "react-router-dom";
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import getCookie from '../component/getCookie.js';
const Detail = () => {
    const [data, setData] = useState([])
    const { Product_ID } = useParams();

    useEffect(() => {
        axios.get(`http://localhost/api/product/detail.php?Product_id=` + Product_ID)
            .then(res => {
                console.log(res.data.records)
                setData(res.data.records)
            })
    }, []);

    const Book = (props) => {
        const history = useHistory();

        const handleClick = () => {
            history.push("/home");
        }
        const handleClick1 = () => {
            axios.post(`http://localhost/api/product/updatetotal.php`, JSON.stringify({
                "Total": parseInt(props.data.Total)-1,
                "Product_id": props.data.Product_id
            }))
                .then(res => {
                    console.log(res.data);
                })
            axios.post(`http://localhost/api/product/insertpurchase.php`, JSON.stringify({
                "Product_id": props.data.Product_id
            }))
                .then(res => {
                    console.log(res.data);
                })
            axios.post(`http://localhost/api/product/insertorder.php`, JSON.stringify({
                "Date": "2020-10-01",
                "Time": "14:29:00",
                "Total": props.data.Price,
                "Amount": "1",
                "Shipment": "postoffice",
                "Status": "รอชำระเงิน",
                "Customer_id": getCookie("Customer_ID")
            }))
                .then(res => {
                    console.log(res.data);
                })
            alert("หยิบใส่ตะกร้าสำเร็จ")
        }

        
        return (
            <div>
                {/* <CardTitle>{props.data.Product_name}</CardTitle>
                        <img className="s1"  onClick={handleClick}  src={require("../component/img/" + props.data.Image)} alt="Card image cap" />
                        <CardBody>
                            <CardSubtitle>รายละเอียดหนังสือ {props.data.Detail} </CardSubtitle>
                            <CardSubtitle>ราคา {props.data.Price} บาท</CardSubtitle>
                            <Button onClick={handleClick1}>หยิบใส่ตะกร้า</Button>
                        </CardBody> */}
                <Row>
                    <Col xs="12" sm="2">
                        <img className="s1" onClick={handleClick} src={require("../component/img/" + props.data.Image)} alt="Card image cap" />
                    </Col>
                    <Col xs="12" sm="10">
                        <h1 className="h1-de"> {props.data.Product_name}  </h1>
                        <p className="p1-de">   {props.data.Detail} </p>
                        <div className="s2">
                            
                            <Row >
                            
                            <Col xs="4" className="cols"><p> </p></Col>
                            <Col xs="4" className="cols"> <del><p className="ps"> {props.data.Price} บาท </p></del></Col>
                            <Col xs="4" className="cols"><p> </p></Col>
                            <Col xs="4" className="cols"><p> หนังสือ </p></Col>
                            <Col xs="4" className="cols"><p>   {props.data.Price} บาท </p></Col>
                            <Col xs="4" className="cold">  <button onClick={handleClick1}>ตะกร้าสินค้า</button></Col>
                            
                        </Row>
                            
                        </div>
                    </Col>
                </Row>
                
            </div>

        )
    }
    return (
        <div>
            <Container>
                {data.map(d => <Book data={d} />)}
            </Container>
        </div>
    );
}

export default Detail;
