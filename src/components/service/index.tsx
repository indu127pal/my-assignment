import React, { useState } from 'react';
import styles from '@/styles/Form.module.css'
// import ContractForm from './contractForm'
import ServiceTable from './serviceTable'

const Service = () => {
  const [ showForm, setShowForm ] = useState(false);
  return (
    <main>
      {/* form UI is done */}
      {/* <div>
        <button type="button" className={styles.button} onClick={() => setShowForm(!showForm)}>
          Add Contract Worker 
        </button>
      </div>
      {showForm && <ContractForm open={showForm} onClose={setShowForm}/>} */}

      {/* work for table data */}
      <ServiceTable />
    </main>
  );
};

export default Service;

