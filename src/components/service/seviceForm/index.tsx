// @ts-nocheck
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addServicesData, editServicesData } from '../../../store/actions/serviceAction';
import { checkEmail } from '../../../utils';
import styles from '@/styles/Form.module.css'
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

const statusType = ['active', 'inactive', 'draft', 'approved'];

const ServiceForm = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const { loading, error, showForm, services, serviceForm } = useSelector(
    (state) => state.sampleData,
  );

  const [ownerName, setOwnerName] = useState('' || serviceForm.ownerName);
  const [status, setStatus] = useState('' || serviceForm.status);
  const [email, setEmail] = useState('' || serviceForm.email);
  const [errorMsg, setErrorMsg] = useState('');

  const validateData = () => {
    if (!ownerName || !status || !email) {
      setErrorMsg('Please fill all the fields');
      return false;
    } else {
      if (checkEmail(email)) {
        setErrorMsg('Email-Id is not valid')
        return false;
      } else {
        setErrorMsg('');
        return true;
      }
    }
  }
  const handleOnboardClick = () => {
    let valid = validateData();
    if (!valid) return;
    let data;
    if (Object.keys(serviceForm).length) {
      data = {
        "id": serviceForm.id,
        "ownerName": ownerName,
        "ownerId": serviceForm.ownerId,
        "status": status,
        "email": email,
        "contractNumber": serviceForm.contractNumber
      }
      dispatch(editServicesData(serviceForm.id, data));
    } else {
      data = {
        "id": Number(services[services.length - 1].id) + 1,
        "ownerName": ownerName,
        "ownerId": Number(services[services.length - 1].id) + 1,
        "status": status,
        "email": email,
        "contractNumber": 'SC100' + String(Number(services[services.length - 1].id) + 1)
      }
      dispatch(addServicesData(data));
    }
    onClose(!open);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={showForm} maxWidth="md">
      <div className={styles.container}>
        <button className={styles.cancel} type="button" onClick={handleClose}>
          <CloseIcon fontSize="medium" />
        </button>
        <h2 className={styles.title}>Add Service form</h2>
        <form className={styles.form}>
          <div className={styles.formcontrol}>
            <label htmlFor="ownerName">Owner Name</label>
            <input
              type="text"
              id="ownerName"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>
          <div className={styles.formcontrol}>
            <label htmlFor="status">Status</label>
            <select id="status" 
              className={styles.formcontrol} 
              style={{ height: "40px"}}
              onChange={(e) => setStatus(e.target.value)}
            >
              {statusType.map((statusVal, index) => <option key={index} value={statusVal}>{statusVal}</option>)}
            </select>
          </div>
          <div className={styles.formcontrol}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formcontrol}>
            <label htmlFor="error" className={styles.errorMessage}>{errorMsg}</label>
          </div>
          <div className={styles.btncontainer}>
            <button type="button" className={styles.button} onClick={handleOnboardClick}>
              Create
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default ServiceForm;
