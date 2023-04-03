// @ts-nocheck
import React, { useState, useMemo } from 'react';
import styles from '@/styles/Table.module.css';
import { removeServicesData, getServiceDataById } from '../../../store/actions/serviceAction';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/types';
import Pagination from '../../common/pagination';
import Loader from '../../common/Loader';
import { PageSize } from '../../../utils'

const ServiceTable = () => {
  const dispatch = useDispatch();
  const { loading, error, services } = useSelector(
    (state: RootState) => state.sampleData,
  );

  // pagination 
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return services.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, services]);


  const renderHeader = () => {
       let headerElement = ['id', 'contractid', 'status', 'ownerId', 'ownerName', 'email', 'action']

       return headerElement.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
       })
   }
   const renderBody = () => {
       return (
        <>
          {loading && <Loader show={loading} />}
          {!loading && currentTableData && 
            currentTableData.map(({ id, contractNumber, status, ownerId, ownerName, email }) => {
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
              totalCount={services.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
           </div>
       </>
   )
}
export default ServiceTable;