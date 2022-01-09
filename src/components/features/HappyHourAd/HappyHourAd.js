import React from 'react';
import styles from './HappyHourAd.module.scss';

class HappyHourAd extends React.Component {
  constructor(){
    super();
  
    setInterval(() => this.forceUpdate, 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  };

  render() {
    const {title, promoDescription} = this.props;
    const promoCounter = this.getCountdownTime();

    return(
      <div className={styles.component}>
        <h3 className = {styles.title}>
          {title}
        </h3>
        <div className = {styles.promoDescription}>       
          {(promoCounter > 23 * 60 * 60) ? promoDescription : promoCounter}
        </div>
      </div>
    );
  };
};

export default HappyHourAd;