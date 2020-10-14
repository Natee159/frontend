import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import getCookie from './getCookie.js';

const Booksearch = (props) => {
    const history = useHistory();
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    useEffect(() => {
        var d = new Date();
        setDate(d.getFullYear()+"-"+ parseInt(d.getMonth() + 1)+"-"+ d.getDate())
        setTime(d.getHours()+":"+ parseInt(d.getMinutes())+":"+ d.getSeconds())
    }, []);
    const handleClick = () => {
        history.push("/detail/" + props.data.Product_id);
    }
    const handleClick1 = () => {
        axios.post(`http://localhost/api/product/updatetotal.php`, JSON.stringify({
            "Total": parseInt(props.data.Total) - 1,
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
            "Date": date,
            "Time": time,
            "Total": (props.data.Price - (props.data.Price * props.data.Percent)),
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
            <Row className="row1">
                <Col xs="12" sm="2">
                    <img className="pic-search" onClick={handleClick} src={require("C:/xampp/htdocs/admin/src/component/img/" + props.data.Image)} alt="Card image cap" />
                </Col>

                <Col xs="12" sm="6">
                    <div className="s3">{props.data.Product_id}</div>
                    <h1 className="h1s">{props.data.Product_name} </h1>
                    <p>{props.data.Detail} </p>
                    <p><b>ผู้เขียน</b> {props.data.Author_name} </p>
                    <div className="s4">
                        <Row>
                            <Col xs="4" className="cols2">รูป</Col>
                            <Col xs="8" className="cols2"><p>สาขาที่มีจำหน่าย</p></Col>
                        </Row>

                    </div>

                </Col>
                <Col xs="12" sm="4">
                    <div className="h2s">
                        {(props.data.Percent !== '0') ?
                            <Row>
                                <Col xs="6" className="cols"><p> </p></Col>
                                <Col xs="6" className="cols"> <del><p className="ps"> {props.data.Price} บาท </p></del></Col>
                                <Col xs="6" className="cols"><p> หนังสือ </p></Col>
                                <Col xs="6" className="cols"><p>   {(props.data.Price-(props.data.Price*props.data.Percent))} บาท </p></Col>
                                <Col xs="4" className="cold">  <button onClick={handleClick1}>ตะกร้าสินค้า</button></Col>
                            </Row>
                            :
                            <Row>
                                <Col xs="6" className="cols"><p> </p></Col>
                                <Col xs="6" className="cols"> <del><p className="ps"> </p></del></Col>
                                <Col xs="6" className="cols"><p> หนังสือ </p></Col>
                                <Col xs="6" className="cols"><p>   {props.data.Price} บาท </p></Col>
                                <Col xs="4" className="cold">  <button onClick={handleClick1}>ตะกร้าสินค้า</button></Col>
                            </Row>
                        }

                    </div>

                </Col>
            </Row>

        </div>
    )
}

export default Booksearch;
