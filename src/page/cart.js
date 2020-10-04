import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button,Form,CustomInput,Label,FormGroup } from 'reactstrap';

const Cart=()=>{
    const [data, setData] = useState([])
    const [Customer_id,setCustomer_id] = useState([5])
    // const [refre, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost/api/product/readpurchase.php?Customer_id=`+ Customer_id)
            .then(res => {
                console.log(res.data.records)
                setData(res.data.records)
            })
    }, []);
    

    return(
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
                                </tr>
                            </thead>
                            {data.map(d => <Tr data={d} />)}
                        </table>
                       
                    
              </Col>
        </Row>
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
         <Button color="primary" type="submit">Add</Button> 
        </Container>
        

    )
}
const Tr = (props) => {
    return (
        <tr>
            <td>{props.data.Product_id}</td>
            <td>{props.data.Product_name}</td>
            <td>{props.data.Price}</td>
            <td>{props.data.Amount}</td>
            <td>{props.data.Total}</td>
            <td>{props.data.Status}</td>
        </tr>
    );
}
export default Cart