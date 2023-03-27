import React from 'react';
import MiniDrawer from '../../components/common/MiniDrawer';
import Contracts from '../../components/contract'

const ContractsPage = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <MiniDrawer />
      <h2>Contract Workers Page</h2>
       {/* contracts workers details */}
      <Contracts />
    </main>
  );
};

export default ContractsPage;
