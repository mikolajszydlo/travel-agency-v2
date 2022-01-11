import React from 'react';
import Icon from '../../common/Icon/Icon';
import styles from './Contact.module.scss';
import settings from '../../../data/settings';


const Contact = () => {

  const getCurrentTime = () => {
    const currentTime = new Date();
    const currentDate = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(),0,0,0,0));
  
    return Math.round((currentTime.getTime() - currentDate.getTime()) / 1000);
  };

  const {morning, afternoon, evening} = settings.contactData;

  const getContactData = () => {
    if(getCurrentTime() >= 8 * 60 * 60 && getCurrentTime() < 12 * 60 * 60){
      return [morning.period, morning.name, morning.phone]
    }
    else if(getCurrentTime() >= 12 * 60 * 60 && getCurrentTime() < 16 * 60 * 60 ){
      return [afternoon.period, afternoon.name, afternoon.phone]
    }
    else if(getCurrentTime() >= 16 * 60 * 60 && getCurrentTime() < 22 * 60 * 60){
      return [evening.period, evening.name, evening.phone]
    } else {
      return ['', 'The office opens at 8:00 UTC', '']
    };
  };

  return (
    <div className={styles.contact}>
      <Icon name = 'phone' />
      <span className = {styles.period}>{getContactData()[0]}</span>
      <span className = {styles.person}>{getContactData()[1]}</span>
      <span className = {styles.number}>{getContactData()[2]}</span>
    </div>
  );
};

export default Contact;