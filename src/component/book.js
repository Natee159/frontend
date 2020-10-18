import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import getCookie from './getCookie.js';
import './book.css';
const Book = (props) => {
    const history = useHistory();
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const handleClick = () => {
        history.push("/detail/" + props.data.Product_id);
    }

    useEffect(() => {
        var d = new Date();
        setDate(d.getFullYear()+"-"+ parseInt(d.getMonth() + 1)+"-"+ d.getDate())
        setTime(d.getHours()+":"+ parseInt(d.getMinutes())+":"+ d.getSeconds())
    }, []);

    const handleClick1 = () => {
        if(props.data.Total !== '0'){
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
        else{
            alert("สินค้าหมด")
        }
    }
    return (
        <Col > 
            <div>
                <Card className="card">
                    <CardImg onClick={handleClick} top width="100%"  src={require("C:/xampp/htdocs/admin/src/component/img/" + props.data.Image)} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><b>{props.data.Product_name}</b></CardTitle>
                        {(props.data.Percent!=='0') ?
                        <div className="card2">
                            <CardSubtitle><del>ราคา {props.data.Price} บาท</del></CardSubtitle>
                            <CardSubtitle>ลด {props.data.Promotion_Name}  </CardSubtitle>
                            <CardSubtitle>เหลือ {(props.data.Price-(props.data.Price*props.data.Percent))} บาท</CardSubtitle>
                        </div>
                            :
                        <div className="card3">
                            <CardSubtitle>ราคา {props.data.Price} บาท</CardSubtitle>
                        </div>
                        }
                        <Button style={{backgroundColor: '#FE1D20'}} onClick={handleClick1}>หยิบใส่ตะกร้า</Button>
                    </CardBody>
                </Card>
            </div>
        </Col>
       
    )
}

export default Book
