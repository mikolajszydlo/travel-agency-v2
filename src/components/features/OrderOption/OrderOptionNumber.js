import React from 'react';

import styles from './OrderOption.module.scss';

const OrderOptionNumber = ({limits, currentValue, setOptionValue}) => (
  <div className = {styles.number}>
    <input 
      className = {styles.inputSmall} 
      type = 'number'
      value = {currentValue}
      min = {limits.min}
      max = {limits.max}
      onChange = {event => setOptionValue(event.currentTarget.value)}
    ></input>
  </div>
);

export default OrderOptionNumber;