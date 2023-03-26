import React from 'react';
import styles from '@/styles/Home.module.css'
import MiniDrawer from '../../components/MiniDrawer';
import Contracts from '../../components/contract'

// const getData = async () => {
//   const res = await fetch(`http://localhost:3030/contractWorkers/`)
//   const data = await res.json();
//   return data;
// }

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
