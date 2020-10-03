import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";

const Book = (props) => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/detail/" + props.productID);
    }
    return (
            <div>
                <Card>
                    <CardImg onClick={handleClick} top width="100%" height="300px" src={require("./" + props.img)} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{props.name}</CardTitle>
                        <CardSubtitle>ราคา {props.price} บาท</CardSubtitle>
                        <Button>หยิบใส่ตะกร้า</Button>
                    </CardBody>
                </Card>
            </div>
    )
}

export default Book
