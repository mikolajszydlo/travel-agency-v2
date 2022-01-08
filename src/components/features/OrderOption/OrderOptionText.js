import React from 'react';

const OrderOptionText = ({ setOptionValue, currentValue }) => (
  <input
    type = "text"
    value = {currentValue}
    onChange = {event => setOptionValue(event.currentTarget.value)}
  />
);

export default OrderOptionText;