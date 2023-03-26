import React, { useState } from 'react';
import styles from '@/styles/Table.module.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const useAPi = (url) => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    //const url = 'https://jsonplaceholder.typicode.com/users'
    const BASE_URL = "http://localhost:3030"
    const url = BASE_URL + "/contractWorkers/";
    const response = await axios.get(url);
    console.log(response.data);
    setData(response.data)
  }

  const removeData = (id) => {
    const BASE_URL = "http://localhost:3030"
    const url = BASE_URL + "/contractWorkers/";
    //const url = 'https://jsonplaceholder.typicode.com/users'
    axios.delete(`${url}/${id}`).then(() => {
      const del = data.filter((item) => id !== item.id)
      setData(del)
    })
  }

  return { data, removeData }
}

const Table = () => {
    const { data, removeData } = useAPi(URL)

   const renderHeader = () => {
       let headerElement = ['id', 'employeeid', 'firstName', 'lastName', 'email', 'role', 'action']

       return headerElement.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
       })
   }

   const renderBody = () => {
       return data && data.map(({ id, employeeNumber, firstName, lastName, role, email, startDate }) => {
           return (
               <tr key={id}>
                   <td>{employeeNumber}</td>
                   <td>{firstName}</td>
                   <td>{lastName}</td>
                   <td>{role}</td>
                   <td>{email}</td>
                   <td>{startDate}</td>
                   <td className={styles.operation}>
                       <button 
                        className={styles.edit} 
                        onClick={() => removeData(id)}>
                            Edit
                        </button>
                       <button 
                        className={styles.delete} 
                        onClick={() => removeData(id)}>
                            Delete
                        </button>
                   </td>
               </tr>
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
       </>
   )
}

export default Table;