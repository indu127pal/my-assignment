import React from 'react';
import MiniDrawer from '../../components/common/MiniDrawer';
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
