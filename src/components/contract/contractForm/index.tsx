// @ts-nocheck
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContractsData, editContractsData } from '../../../store/actions/action';
import { checkEmail } from '../../../utils';
import styles from '@/styles/Form.module.css'
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { RootState } from '../../../store/types';

interface form {
  open: boolean
  onClose: () => void
}

const ContractForm = ({ open, onClose }: form) => {
  const dispatch = useDispatch();

  const { loading, error, showForm, contracts, contractForm } = useSelector(
    (state: RootState) => state.sampleData,
  );

  const [firstName, setFirstName] = useState('' || contractForm.firstName);
  const [lastName, setLastName] = useState('' || contractForm.lastName);
  const [role, setRole] = useState('' || contractForm.role);
  const [startDate, setStartDate] = useState('' || contractForm.startDate);
  const [email, setEmail] = useState('' || contractForm.email);
  const [errorMsg, setErrorMsg] = useState('');

  const validateData = () => {
    if (!firstName || !lastName || !role || !startDate || !email) {
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
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className={styles.formcontrol}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
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
              Onboard
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default ContractForm;
