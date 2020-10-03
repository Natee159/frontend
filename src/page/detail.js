import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useParams } from "react-router-dom";


const Detail = () => {
    const [data, setData] = useState([])
    const {Product_ID} = useParams();

    useEffect(() => {
        axios.get(`http://localhost/api/product/detail.php?Product_id=` + Product_ID)
            .then(res => {
                console.log(res.data.records)
                setData(res.data.records)
            })
    }, []);

    return (
        <div>
            <Container>
                {data.map(d => <h1>{d.Product_name}</h1>)}
            </Container>
        </div>
    );
}

export default Detail;
