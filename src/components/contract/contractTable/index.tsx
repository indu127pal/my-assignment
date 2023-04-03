// @ts-nocheck
import React, { useState, useMemo } from 'react';
import styles from '@/styles/Table.module.css';
import { removeContractsData, getContractDataById } from '../../../store/actions/action';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/types';
import Pagination from '../../common/pagination';
import Loader from '../../common/Loader';
import { PageSize } from '../../../utils'

const ContractTable = () => {
  const dispatch = useDispatch();
  const { loading, error, contracts } = useSelector(
    (state: RootState) => state.sampleData,
  );

  // pagination 
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return contracts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, contracts]);

  const renderHeader = () => {
       let headerElement = ['id', 'empid', 'firstName', 'lastName', 'role', 'email', 'startDate', 'action']

       return headerElement.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
       })
   }
   const renderBody = () => {
       return (
        <>
          {loading && <Loader show={loading} />}
          {!loading && currentTableData && 
            currentTableData.map(({ id, employeeNumber, firstName, lastName, role, email, startDate }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{employeeNumber}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{role}</td>
                    <td>{email}</td>
                    <td>{startDate}</td>
                    <td className={styles.operation}>
                        <button 
                          className={styles.edit} 
                          onClick={() => dispatch(getContractDataById(id))}>
                              Edit
                          </button>
                        <button 
                          className={styles.delete} 
                          onClick={() => dispatch(removeContractsData(id))}>
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
             <Pagination
              currentPage={currentPage}
              totalCount={contracts.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
           </div>
       </>
   )
}

export default ContractTable;