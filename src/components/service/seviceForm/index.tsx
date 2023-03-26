import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addServicesData, editServicesData } from '../../../store/actions/serviceAction';
import styles from '@/styles/Form.module.css'
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

const ServiceForm = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const { loading, error, showForm, services, serviceForm } = useSelector(
    (state) => state.sampleData,
  );
  console.log(loading, error);

  const [ownerName, setOwnerName] = useState('' || serviceForm.ownerName);
  const [status, setStatus] = useState('' || serviceForm.status);
  const [email, setEmail] = useState('' || serviceForm.email);
  const [isEdit, setIsEdit] = useState(false);

  const validateData = () => {
    
  }
  const handleOnboardClick = () => {
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

  // const handleOffboardClick = () => {
  //   setIsOnboarding(false);
  //   // logic for submitting form data to API or data store goes here
  // };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={showForm} maxWidth="md">
      <div className={styles.container}>
        <button className={styles.cancel} type="button" onClick={handleClose}>
          <CloseIcon fontSize="medium" />
        </button>
        <h2 className={styles.title}>Onboard Contract form</h2>
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
            <input
              type="text"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
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
