// @ts-nocheck
import { 
    API_REQUEST,
    API_FAILURE,
    OPEN_FORM,
    CLOSE_FORM,
    CLEAR_FORM,
    GET_CONTRACT_SUCCESS,
    POST_CONTRACT_SUCCESS,
    DELETE_CONTRACT_SUCCESS,
    EDIT_CONTRACT_SUCCESS,
    GET_CONTRACT_BY_ID
  } from "../constants";
  import axios from 'axios';
  
  // all the api endpoints
  
  const BASE_URL = "http://localhost:3030";
  const contract_url = BASE_URL + "/contractWorkers/";
  const service_url = BASE_URL + "/serviceContracts/";
  const mapping_url = BASE_URL + "/workerContractMappings/";
  
  export const clearForm = () => async (dispatch) => {
    dispatch({ type: CLEAR_FORM });
  }
  
  export const openForm = () => async (dispatch) => {
    dispatch({ type: OPEN_FORM });
  }
  
  export const closeForm = () => async (dispatch) => {
    dispatch({ type: CLOSE_FORM });
  }
  
  export const getContractsData = () => async (dispatch) => {
    try {
      dispatch({ type: API_REQUEST });
      const response = await axios.get(contract_url);
      //console.log(response.data);
      
      dispatch({
        type: GET_CONTRACT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const addContractsData = (data) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      const response = await axios({
        method: 'post',
        url: contract_url,
        data: data
      });
      console.log(response.data);
      dispatch({ type: POST_CONTRACT_SUCCESS });
      await dispatch(getContractsData());
  
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const removeContractsData = (id) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      const response = await axios({
        method: 'delete',
        url: `${contract_url}/${id}`
      });
      console.log(response.data);
      dispatch({
        type: DELETE_CONTRACT_SUCCESS
      });
      await dispatch(getContractsData());
  
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const editContractsData = (id, contractForm) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      debugger;
      const response = await axios({
        method: 'put',
        url: `${contract_url}/${id}`,
        data: contractForm
      });
      console.log(response.data);
  
      dispatch({
        type: EDIT_CONTRACT_SUCCESS
      });
  
      await dispatch(getContractsData());
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const getContractDataById = (id) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      debugger;
      const response = await axios({
        method: 'get',
        url: `${contract_url}/${id}`,
      });
      
      console.log(response.data);
  
      dispatch({
        type: GET_CONTRACT_BY_ID,
        payload: response.data,
      });
  
      dispatch({ type: OPEN_FORM });
  
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };