import React, { useState, useEffect } from 'react';
import { Col,Table } from 'reactstrap';
const Commentshow = (props) => {
    return (
      <Table>
            <td>{props.data.Score}</td>
            <td>{props.data.Date}</td>
            <td>{props.data.Comment}</td>
    </Table>
    );
  }
  
  export default Commentshow;