import React from 'react';
import styles from '@/styles/Home.module.css'
import MiniDrawer from '../../components/MiniDrawer';
import Service from '../../components/service';

const ServicePage = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <MiniDrawer />
      <h2>Service Contracts Page</h2>
      <Service />
    </main>
  );
};

export default ServicePage;
