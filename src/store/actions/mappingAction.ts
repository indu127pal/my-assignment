// @ts-nocheck
import { 
    API_REQUEST,
    API_FAILURE,
    OPEN_FORM,
    CLOSE_FORM,
    CLEAR_FORM,

    GET_MAPPING_SUCCESS,
    POST_MAPPING_SUCCESS,
    DELETE_MAPPING_SUCCESS,
    EDIT_MAPPING_SUCCESS,
    GET_MAPPING_BY_ID
  } from "../constants";
  import axios from 'axios';
  
  // all the api endpoints
  
 //const BASE_URL = "http://localhost:3030";
  const BASE_URL = "https://my-json-server.typicode.com/indu127pal/my-assignment"
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
  
  export const getMappingsData = () => async (dispatch) => {
    try {
      dispatch({ type: API_REQUEST });
      const response = await axios.get(mapping_url);
      
      dispatch({
        type: GET_MAPPING_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const addMappingsData = (data) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      const response = await axios({
        method: 'post',
        url: mapping_url,
        data: data
      });

      dispatch({ type: POST_MAPPING_SUCCESS });
      await dispatch(getMappingsData());
  
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const removeMappingsData = (id) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      const response = await axios({
        method: 'delete',
        url: `${mapping_url}/${id}`
      });

      dispatch({
        type: DELETE_MAPPING_SUCCESS
      });
      await dispatch(getMappingsData());
  
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const editMappingsData = (id, contractForm) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      debugger;
      const response = await axios({
        method: 'put',
        url: `${mapping_url}/${id}`,
        data: contractForm
      });
  
      dispatch({
        type: EDIT_MAPPING_SUCCESS
      });
  
      await dispatch(getMappingsData());
    } catch (error) {
      dispatch({
        type: API_FAILURE,
        payload: "error message",
      });
    }
  };
  
  export const getMappingDataById = (id) => async (dispatch) => {
    try {
      dispatch({
        type: API_REQUEST,
      });
      debugger;
      const response = await axios({
        method: 'get',
        url: `${mapping_url}/${id}`,
      });
  
      dispatch({
        type: GET_MAPPING_BY_ID,
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