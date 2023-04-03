// @ts-nocheck
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  getContractsData,
  clearForm,
  openForm,
  closeForm
} from '../../store/actions/action';
import { RootState } from '../../store/types';

import styles from '@/styles/Form.module.css';
import ContractForm from './contractForm';
import ContractTable from './contractTable';
import Loader from '../common/loader';

const Contracts = () => {
  const dispatch = useDispatch();

  const { loading, error, showForm } = useSelector(
    (state: RootState) => state.sampleData,
  );
  
  // useEffect(() => {
  //   dispatch(getContractsData());
  // }, [dispatch]);

  const handleAddContract = () => {
    dispatch(clearForm());
    dispatch(openForm());
  }
  return (
    <>
      {loading && <Loader show={loading} />}
      {!loading && <main className={styles.maincontainer}>
        {/* form UI is done */}
        <div style={{marginBottom: "20px", width: '250px'}}>
          <button type="button" className={styles.button} onClick={handleAddContract}>
            Add Contract +
          </button>
        </div>
        {showForm && <ContractForm open={showForm} onClose={() => dispatch(closeForm())}/>}

        {/* work for table data */}
        <ContractTable />
      </main>}
    </>
  );
};

export default Contracts;

