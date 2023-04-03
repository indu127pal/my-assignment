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
  getMappingsData
} from '../../store/actions/mappingAction';
//import ServiceForm from './seviceForm';
import MappingTable  from './mappingTable';
import Loader from '../common/loader';
import { RootState } from '../../store/types';

const Mapping = () => {
  const dispatch = useDispatch();

  const { loading, error, showForm } = useSelector(
    (state: RootState) => state.sampleData,
  );
  
  useEffect(() => {
    dispatch(getMappingsData());
  }, [dispatch]);

  const handleAddService = () => {
    dispatch(clearForm());
    dispatch(openForm());
  }

  return (
    <>
      {loading && <Loader show={loading} />}
      {!loading && <main className={styles.maincontainer} style={{ marginTop: "20px"}}>
        {/* form UI is done */}
        {/* <div style={{marginBottom: "20px", width: '250px'}}>
          <button type="button" className={styles.button} onClick={handleAddService}>
            Add worker-contract +
          </button>
        </div> */}
        {/* {showForm && <ServiceForm open={showForm} onClose={() => dispatch(closeForm())}/>} */}
        
        <MappingTable />
      </main>}
    </>
  );
};

export default Mapping;