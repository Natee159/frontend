import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form, CustomInput, Label, FormGroup } from 'reactstrap';
import getCookie from '../component/getCookie.js';
import { useHistory } from "react-router-dom";
const Cart = () => {
    const [data, setData] = useState([])
    const history = useHistory();
    useEffect(() => {
        axios.get(`http://localhost/api/product/readpurchase.php?Customer_id=` + getCookie("Customer_ID"))
            .then(res => {
                console.log(res.data.records)
                setData(res.data.records)
            })
            if(getCookie("username") === ""){
                history.push("/")
              }
    }, []);

    const handleClick = () => {
        alert("ชำระเงินเสร็จสิ้น")
        data.map(d => axios.post(`http://localhost/api/product/updateorder.php`, JSON.stringify({
            "Status": "ยกเลิก",
            "Order_Num": d.Order_Num
        })) )
        window.location.reload(false);
    }

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
            <h1>ราคารวมสินค้า {data.reduce(function(sum, item){return sum = sum+parseInt(item.Total)},0)} บาท</h1>
            <Row>
            </Row>
            <h5>ช่องทางการชำระเงิน</h5>
            <Row>
                <Form>
                    <FormGroup>
                        <div>
                            <CustomInput type="checkbox" id="exampleCustomCheckbox1" label="ชำระเงินด้วยบัตรเครดิต VISA/MASTER CARD" />
                            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="ชำระเงินผ่านธนาคาร(ATM,iBanking)" />
                            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="ชำระเงินปลายทาง" />
                        </div>
                    </FormGroup>
                </Form>
            </Row>
            <Button onClick={handleClick}color="primary" type="submit">ชำระสินค้า</Button>
        </Container>
    )
}

const Tr = (props) => {
    const updateorder = (id) => {
        alert('delete order = ' + id);
        axios.post(`http://localhost/api/product/updateorder.php`, JSON.stringify({
            "Status": "ยกเลิก",
            "Order_Num": props.data.Order_Num
        }))
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        axios.post(`http://localhost/api/product/updatetotal.php`, JSON.stringify({
                "Total": parseInt(props.data.Totalproduct)+1,
                "Product_id": props.data.Product_id
        }))
                .then(res => {
                    console.log(res.data);
        })
        window.location.reload(false);
        
    }
    return (
        <tr>
            <td>{props.data.Product_id}</td>
            <td>{props.data.Product_name}</td>
            <td>{props.data.Price}</td>
            <td>{props.data.Amount}</td>
            <td>{props.data.Total}</td>
            <td>{props.data.Status}</td>
            <td><Button onClick={() => updateorder(props.data.Product_id)} >Delete</Button></td>
        </tr>
    );
}
export default Cart