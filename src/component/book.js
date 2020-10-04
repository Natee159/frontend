import React from 'react';
import { Col } from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";

const Book = (props) => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/detail/" + props.data.Product_id);
    }
    const handleClick1 = () => {
        history.push("/Cart" );
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
