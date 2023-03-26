// @ts-nocheck
import React, { useState } from 'react';
import styles from '@/styles/Table.module.css';
import { removeServicesData, getServiceDataById } from '../../../store/actions/serviceAction';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/types';

const ServiceTable = () => {
  const { loading, error, services } = useSelector(
    (state: RootState) => state.sampleData,
  );
  const [index, setIndex] = useState([0, 5])
  let data = services.slice(index[0], index[1]);
  const dispatch = useDispatch();
  const handlePagination = (index) => {
    const ele = document.getElementById(index);
    console.log(ele);
    const list = ele?.parentNode?.childNodes;
    list?.forEach((node) => {
      node?.classList.remove(`${styles.active}`)
    })
    ele?.classList.add(`${styles.active}`);
    if (index === 1) setIndex([0, 5]);
    else if (index === 2) setIndex([5, 10]);
    else if (index === 3) setIndex([10, 15]);
    else setIndex([15, 20]);
  }
  const renderHeader = () => {
       let headerElement = ['id', 'contractid', 'status', 'ownerId', 'ownerName', 'email', 'action']

       return headerElement.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
       })
   }
   const renderBody = () => {
       return (
        <>
          {loading && <div> start loading data </div>}
          {!loading && data && 
            data.map(({ id, contractNumber, status, ownerId, ownerName, email }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{contractNumber}</td>
                    <td>{status}</td>
                    <td>{ownerId}</td>
                    <td>{ownerName}</td>
                    <td>{email}</td>
                    <td className={styles.operation}>
                        <button 
                          className={styles.edit} 
                          onClick={() => dispatch(getServiceDataById(id))}>
                              Edit
                          </button>
                        <button 
                          className={styles.delete} 
                          onClick={() => dispatch(removeServicesData(id))}>
                              Delete
                          </button>
                    </td>
                </tr>
              )
            })
          }
        </>
        )
   }

  const renderPagination = () => {
    let pageMap = [1, 2, 3, 4, 5]

    return pageMap.map((key, index) => {
        return (
            <div className={styles.pageno} id={index+1} key={index} onClick={() => handlePagination(index+1)}>
              {index+1}
            </div>
        )
    })
  }

   return (
       <>
           <table id='employee' className={styles.employee}>
               <thead>
                   <tr>{renderHeader()}</tr>
               </thead>
               <tbody>
                   {renderBody()}
               </tbody>
           </table>
           <div className={styles.pagination}>
             <h4 style={{ marginTop: '5px'}}>Pages</h4>
             {renderPagination()}
           </div>
       </>
   )
}
export default ServiceTable;