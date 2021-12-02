import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';


const OrderForm = ({options, tripCost}) => (
  <Row>
    <Col xs={12}>
      <OrderSummary options={options} tripCost={tripCost}/>
    </Col>
  </Row>
);

export default OrderForm;
