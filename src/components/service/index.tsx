import React, { useState, useEffect } from 'react';
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

const Service = () => {
  const dispatch = useDispatch();

  const { loading, error, showForm, contracts } = useSelector(
    (state) => state.sampleData,
  );
  console.log(loading, showForm);

  //const [ showForm, setShowForm ] = useState(showForm);
  
  useEffect(() => {
    dispatch(getServicesData());
  }, []);
  const handleAddService = () => {
    dispatch(clearForm());
    dispatch(openForm());
  }

  return (
    <>
      {loading && <div> start loading data </div>}
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

