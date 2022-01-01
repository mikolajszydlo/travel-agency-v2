import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';


const OrderForm = ({options, tripCost, setOrderOption}) => (
  <Row>
    {pricing.map(pricingOption => (
      <Col key={pricingOption.id} md={4} >
        <OrderOption 
          {...pricingOption} 
          currentValue = {options[pricingOption.id]}
          setOrderOption={setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary options={options} tripCost={tripCost}/>
    </Col>
  </Row>
);

export default OrderForm;
