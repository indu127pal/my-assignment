import React from 'react';
import styles from '@/styles/Loader.module.css';

const Loader = ({ show }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  };

export default Loader;