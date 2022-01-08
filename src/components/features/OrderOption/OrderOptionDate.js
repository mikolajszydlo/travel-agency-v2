import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import styles from './OrderOption.module.scss'
import "react-datepicker/dist/react-datepicker.css";

const OrderOptionDate = ({setOptionValue, currentValue}) => {

  return (
  <div className = {styles.date}>
    <DatePicker selected={currentValue} onChange={(date) => setOptionValue(date)} />
  </div>
  );
};

export default OrderOptionDate;

