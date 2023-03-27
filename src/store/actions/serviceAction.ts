// @ts-nocheck
import { 
    API_REQUEST,
    API_FAILURE,
    OPEN_FORM,
    CLOSE_FORM,
    CLEAR_FORM,

    GET_SERVICE_SUCCESS,
    POST_SERVICE_SUCCESS,
    DELETE_SERVICE_SUCCESS,
    EDIT_SERVICE_SUCCESS,
    GET_SERVICE_BY_ID
  } from "../constants";
  import axios from 'axios';
  
  // all the api endpoints
  const BASE_URL = "http://localhost:3030";
  //const BASE_URL = "https://my-json-server.typicode.com/indu127pal/my-assignment"
  const service_url = BASE_URL + "/serviceContracts/";
  
  export const getServicesData = () => async (dispatch) => {
    try {
      dispatch({ type: API_REQUEST });
      const response = await axios.get(service_url);
      
      dispatch({
        type: GET_SERVICE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const addServicesData = (data) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      const response = await axios({
        method: 'post',
        url: service_url,
        data: data
      });

      dispatch({ type: POST_SERVICE_SUCCESS });
      await dispatch(getServicesData());
  
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const removeServicesData = (id) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      const response = await axios({
        method: 'delete',
        url: `${service_url}/${id}`
      });

      dispatch({
        type: DELETE_SERVICE_SUCCESS
      });
      await dispatch(getServicesData());
  
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const editServicesData = (id, form) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      debugger;
      const response = await axios({
        method: 'put',
        url: `${service_url}/${id}`,
        data: form
      });
  
      dispatch({
        type: EDIT_SERVICE_SUCCESS
      });
  
      await dispatch(getServicesData());
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const getServiceDataById = (id) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      debugger;
      const response = await axios({
        method: 'get',
        url: `${service_url}/${id}`,
      });
  
      dispatch({
        type: GET_SERVICE_BY_ID,
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