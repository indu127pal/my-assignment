import React from 'react';
import styles from '@/styles/Home.module.css'
import MiniDrawer from '../../components/MiniDrawer';
import Contracts from '../../components/contract'

const ContractsPage = () => {
  console.log("check the data")
  return (
    <main className={styles.main}>
      <MiniDrawer />
      <h3>Contract Workers Page</h3>
       {/* contracts workers details */}
      <Contracts />
    </main>
  );
};

export default ContractsPage;
