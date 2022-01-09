import React from 'react';
import styles from './Hero.module.scss';
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';
import settings from '../../../data/settings';
import PropTypes from 'prop-types';

const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image} alt="hero" src={imageSrc} />
    <div className={styles.happyHour}>
      <HappyHourAd 
        title={settings.happyHour.title} 
        promoDescription={settings.happyHour.promoDescription}/>
    </div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default Hero;
