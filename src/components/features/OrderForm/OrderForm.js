import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, tripId, tripName ) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    tripId,
    tripName,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
    });
};

const checkFormBeforeSend = (options, tripCost, tripId, tripName) => {
  if(options.name && options.contact){
    sendOrder(options, tripCost, tripId, tripName)
  } else {
    window.alert(settings.formMessages.formIncomplete);
  }
};

const OrderForm = ({options, tripCost, setOrderOption, tripId, tripName}) => (
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
      <Button onClick={() => checkFormBeforeSend(options, tripCost, tripId, tripName)}>Order now!</Button>
    </Col>
  </Row>
);

export default OrderForm;
