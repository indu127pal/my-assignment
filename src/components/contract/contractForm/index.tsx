import { useState } from 'react';
import styles from '@/styles/Form.module.css'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const ContractForm = ({ open, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [isOnboarding, setIsOnboarding] = useState(false);

  const handleOnboardClick = () => {
    setIsOnboarding(true);
    // logic for submitting form data to API or data store goes here
  };

  const handleOffboardClick = () => {
    setIsOnboarding(false);
    // logic for submitting form data to API or data store goes here
  };

  const handleClose = () => {
    onClose(!open);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className={styles.container}>
        <h2 className={styles.title}>Onboard/Offboard Contract form</h2>
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
            <label htmlFor="employeeNumber">Employee Number</label>
            <input
              type="text"
              id="employeeNumber"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
            />
          </div>
          <div className={styles.btncontainer}>
            <button type="button" className={styles.button} onClick={handleOnboardClick}>
              Onboard
            </button>
            <button type="button" className={styles.button} onClick={handleOffboardClick}>
              Offboard
            </button>
          </div>
        </form>
        {isOnboarding && (
          <div className={styles.success}>
            <p>Contract worker successfully onboarded!</p>
          </div>
        )}
        {!isOnboarding && (
          <div className={styles.success}>
            <p>Contract worker successfully offboarded!</p>
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default ContractForm;
