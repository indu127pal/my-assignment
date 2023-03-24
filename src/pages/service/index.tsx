import React from 'react';
import styles from '@/styles/Home.module.css'
import MiniDrawer from '../../components/MiniDrawer';
import Service from '../../components/service';

const ServicePage = () => {
  return (
    <main className={styles.main}>
      <MiniDrawer />
      <h1>Service Contracts Page</h1>
      <Service />
    </main>
  );
};

export default ServicePage;
