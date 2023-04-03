// @ts-nocheck
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '@/styles/Form.module.css'
import {
  clearForm,
  openForm,
  closeForm
} from '../../store/actions/action';
import {
  getServicesData
} from '../../store/actions/serviceAction';
import ServiceForm from './seviceForm';
import ServiceTable from './serviceTable'
import Loader from '../common/loader';
import { RootState } from '../../store/types';

const Service = () => {
  const dispatch = useDispatch();

  const { loading, error, showForm } = useSelector(
    (state: RootState) => state.sampleData,
  );
  
  useEffect(() => {
    dispatch(getServicesData());
  }, [dispatch]);
  
  const handleAddService = () => {
    dispatch(clearForm());
    dispatch(openForm());
  }

  return (
    <>
      {loading && <Loader show={loading} />}
      {!loading && <main className={styles.maincontainer}>
        {/* form UI is done */}
        <div style={{marginBottom: "20px", width: '250px'}}>
          <button type="button" className={styles.button} onClick={handleAddService}>
            Add Services +
          </button>
        </div>
        {showForm && <ServiceForm open={showForm} onClose={() => dispatch(closeForm())}/>}
        
        <ServiceTable />
      </main>}
    </>
  );
};

export default Service;

