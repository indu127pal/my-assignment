// @ts-nocheck
import React, { useState, useMemo } from 'react';
import styles from '@/styles/Table.module.css';
import { removeMappingsData, getMappingDataById } from '../../../store/actions/mappingAction';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/types';
import Pagination from '../../common/pagination';
import { PageSize } from '../../../utils'

const MappingTable = () => {
  const dispatch = useDispatch();
  const { loading, error, workerContractMappings } = useSelector(
    (state: RootState) => state.sampleData,
  );

  // pagination 
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return workerContractMappings.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, workerContractMappings]);

  const renderHeader = () => {
       let headerElement = ['id', 'empid', 'contractid', 'allocation', 'action']

       return headerElement.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
       })
   }
   const renderBody = () => {
       return (
        <>
          {loading && <div> start loading data </div>}
          {!loading && currentTableData && 
            currentTableData.map(({ id, employeeNumber, contractNumber, allocation }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{employeeNumber}</td>
                    <td>{contractNumber}</td>
                    <td>{allocation}</td>
                    <td className={styles.operation}>
                        {/* <button 
                          className={styles.edit} 
                          onClick={() => dispatch(getMappingDataById(id))}>
                              Edit
                        </button> */}
                        <button 
                          className={styles.delete} 
                          onClick={() => dispatch(removeMappingsData(id))}>
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
              totalCount={workerContractMappings.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
           </div>
       </>
   )
}

export default MappingTable;