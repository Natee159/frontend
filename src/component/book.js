import React from 'react';
import { Col } from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import getCookie from './getCookie.js';

const Book = (props) => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/detail/" + props.data.Product_id);
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
        <Col>
            <div>
                <Card>
                    <CardImg onClick={handleClick} top width="100%" height="300px" src={require("./img/" + props.data.Image)} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{props.data.Product_name}</CardTitle>
                        <CardSubtitle>ราคา {props.data.Price} บาท</CardSubtitle>
                        <Button onClick={handleClick1}>หยิบใส่ตะกร้า</Button>
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}

export default Book
