import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form, CustomInput, Label, FormGroup } from 'reactstrap';
import getCookie from '../component/getCookie.js';
import { useHistory } from "react-router-dom";
const History = () => {
    const [data, setData] = useState([])
    const history = useHistory();
    useEffect(() => {
        axios.get(`http://localhost/api/product/showhistory.php?Customer_id=` + getCookie("Customer_ID"))
            .then(res => {
                console.log(res.data.records)
                setData(res.data.records)
            })
        if (getCookie("username") === "") {
            history.push("/")
        }
    }, []);

   

    return (
        <Container>
            <h1>ชำระเงิน</h1>
            <Row>
                <Col>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>รหัสสินค้า</th>
                                <th>รายการสินค้า</th>
                                <th>ราคา(บาท)</th>
                                <th>จำนวน</th>
                                <th>รวม(บาท)</th>
                                <th>สถานะ</th>
                                <th>ลบรายการ</th>
                            </tr>
                        </thead>
                        {data.map(d => <Tr data={d} total={data.Total} />)}
                    </table>
                </Col>
            </Row>
            
        </Container>
    )
}

const Tr = (props) => {
   

    return (
        <tr>
            <td>{props.data.Product_id}</td>
            <td>{props.data.Product_name}</td>
            <td>{parseFloat(props.data.Price - (props.data.Price * props.data.Percent))}</td>
        <td>
            {props.data.Amount}
        </td>
            <td>{parseFloat(props.data.Totalorder)}</td>
            <td>{props.data.Status}</td>
            
        </tr>
    );
}
export default History