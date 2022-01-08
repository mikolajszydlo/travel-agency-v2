import React from 'react';

import Icon from '../../common/Icon/Icon';
import styles from './OrderOption.module.scss'
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className = {styles.icons}>
    {required ? (false || undefined) : (
      <div
        key = 'null'
        className = {styles.none}
        onChange = {setOptionValue('')}
      >
        <Icon name = {'times-circle'} />
        none
      </div>
    )} 
    {values.map(value => (
      <div 
        key = {value.id} 
        className = {currentValue === value.id ? `${styles.icon} ${styles.active}` : styles.icon}
        onClick = {() => setOptionValue(value.id)}
      >
        <Icon name = {value.icon} />
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

export default OrderOptionIcons;