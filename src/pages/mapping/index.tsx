import React from 'react';
import MiniDrawer from '../../components/common/MiniDrawer';
import Mapping from '../../components/mapping';

const MappingPage = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <MiniDrawer />
      <h2>Worker-Contract Mappings Page</h2>
      <Mapping />
    </main>
  );
};

export default MappingPage;