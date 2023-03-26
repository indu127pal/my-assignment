import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContractsData, editContractsData } from '../../../store/actions/action';
import styles from '@/styles/Form.module.css'
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

const ContractForm = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const { loading, error, showForm, contracts, contractForm } = useSelector(
    (state) => state.sampleData,
  );
  console.log(loading, error);

  const [firstName, setFirstName] = useState('' || contractForm.firstName);
  const [lastName, setLastName] = useState('' || contractForm.lastName);
  const [role, setRole] = useState('' || contractForm.role);
  const [startDate, setStartDate] = useState('' || contractForm.startDate);
  const [email, setEmail] = useState('' || contractForm.email);
  const [isEdit, setIsEdit] = useState(false);

  const validateData = () => {
    
  }
  const handleOnboardClick = () => {
    let data;
    if (Object.keys(contractForm).length) {
      data = {
        "id": contractForm.id,
        "firstName": firstName,
        "lastName": lastName,
        "role": role,
        "startDate": startDate,
        "email": email,
        "employeeNumber": contractForm.employeeNumber
      }
      dispatch(editContractsData(contractForm.id, data));
    } else {
      data = {
        "id": Number(contracts[contracts.length - 1].id) + 1,
        "firstName": firstName,
        "lastName": lastName,
        "role": role,
        "startDate": startDate,
        "email": email,
        "employeeNumber": 'CW100' + String(Number(contracts[contracts.length - 1].id) + 1)
      }
      dispatch(addContractsData(data));
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
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.formcontrol}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.formcontrol}>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className={styles.formcontrol}>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
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
              Onboard
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default ContractForm;
