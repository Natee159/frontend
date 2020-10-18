import React, { useState, useEffect } from 'react';
import { Col,Row,Table } from 'reactstrap';

const Commentshow = (props) => {
    return (

    <Row className="col-c" >
    <Col className="col-c1" sm="6">
     <div>  <b> Score {props.data.Score} </b>    </div>
    </Col>
    
    <Col className="col-c2" sm="6">
    <div><b> Date  {props.data.Date}  </b>  </div>
    </Col>
    <Col  className="col-c3" sm="12">
    <div><b> User  {props.data.Email} </b>   </div>
    </Col>
    
    <Col className="col-c4" sm="12">
    <div className="c1">{props.data.Comment}     </div>
    </Col>
    
 </Row>
    );
  }
  
  export default Commentshow;