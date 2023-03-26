// @ts-nocheck
import React, { useState } from 'react';
import styles from '@/styles/Table.module.css';
import { removeContractsData, getContractDataById } from '../../../store/actions/action';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/types';

const ContractTable = () => {
  const { loading, error, contracts } = useSelector(
    (state: RootState) => state.sampleData,
  );
  const [index, setIndex] = useState([0, 5])
  let data = contracts.slice(index[0], index[1]);
  const dispatch = useDispatch();

  const handlePagination = (index: string) => {
    const ele = document.getElementById(index);
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
       let headerElement = ['id', 'empid', 'firstName', 'lastName', 'role', 'email', 'startDate', 'action']

       return headerElement.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
       })
   }
   const renderBody = () => {
       return (
        <>
          {loading && <div> start loading data </div>}
          {!loading && data && 
            data.map(({ id, employeeNumber, firstName, lastName, role, email, startDate }) => {
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

export default ContractTable;

// import React from 'react';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import data from '../../../data/data.json';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 80 },
//   { field: 'employeeNumber', headerName: 'Emp Number', width: 100 },
//   { field: 'firstName', headerName: 'First name', width: 100 },
//   { field: 'lastName', headerName: 'Last name', width: 100 },
//   { field: 'role', headerName: 'Role', width: 150 },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = data.contractWorkers;

// const ContractTable = ({ data }) => {
//   return (
//     <div style={{ height: 600, width: '100%' }}>
//       <DataGrid
//         rows={data}
//         columns={columns}
//         pageSize={10}
//         rowsPerPageOptions={[5]}
//       />
//     </div>
//   );
// }

// export default ContractTable;