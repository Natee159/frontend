import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Booksearch = (props) => {
    const history = useHistory();

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
            "Date": "2020-10-01",
            "Time": "14:29:00",
            "Total": props.data.Price,
            "Amount": "1",
            "Shipment": "postoffice",
            "Status": "รอชำระเงิน",
            "Customer_id": "5"
        }))
            .then(res => {
                console.log(res.data);
            })
    }
    return (

        // <Row>
        //     <div>
        //         <Card>
        //             <CardImg onClick={handleClick} top width="100%" height="300px" src={require("./img/" + props.data.Image)} alt="Card image cap" />
        //             <CardBody>
        //                 <CardTitle>{props.data.Product_name}</CardTitle>
        //                 <CardSubtitle>ราคา {props.data.Price} บาท</CardSubtitle>
        //                 <Button onClick={handleClick1}>หยิบใส่ตะกร้า</Button>
        //             </CardBody>
        //         </Card>
        //     </div>
        // </Row>
        <div>
            <Row className="row1">
                <Col xs="12" sm="2">
                    <img className="pic-search" onClick={handleClick} src={require("../component/img/" + props.data.Image)} alt="Card image cap" />
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

                        <Row >
                            <Col xs="6" className="cols"><p> </p></Col>
                            <Col xs="6" className="cols"> <del><p className="ps"> {props.data.Price} บาท </p></del></Col>
                            <Col xs="6" className="cols"><p> หนังสือ </p></Col>
                            <Col xs="6" className="cols"><p>   {props.data.Price} บาท </p></Col>
                        </Row>

                    </div>

                </Col>
            </Row>

        </div>
    )
}

export default Booksearch;
