import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Booksearch from '../component/booksearch.js';

const Search = () => {
    const [data, setData] = useState([])
    const {Type_search} = useParams();
    const {Product_name} = useParams();
    const [reset, setReset] = useState(0)
    useEffect(() => {
        axios.get(`http://localhost/api/product/search.php?Type_search=`+ Type_search + '&' + `Product_name=` + Product_name)
            .then(res => {
                console.log(res.data.records)
                setData(res.data.records)
            })
    }, []);

    return (
        <div>
            <Container>
            {data.map(d => <Booksearch data={d} />)}
            </Container>
        </div>
    );
}

export default Search;
