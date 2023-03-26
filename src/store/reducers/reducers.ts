import { 
  API_REQUEST,
  API_FAILURE,
  CLOSE_FORM,
  OPEN_FORM,
  CLEAR_FORM,

  GET_CONTRACT_SUCCESS,
  POST_CONTRACT_SUCCESS,
  DELETE_CONTRACT_SUCCESS,
  EDIT_CONTRACT_SUCCESS,
  GET_CONTRACT_BY_ID,

  GET_SERVICE_SUCCESS,
  POST_SERVICE_SUCCESS,
  DELETE_SERVICE_SUCCESS,
  EDIT_SERVICE_SUCCESS,
  GET_SERVICE_BY_ID
} from "../constants";

const initialState = {
  contracts: [],
  services: [],
  contractForm: {},
  serviceForm: {},
  showForm: false,
  loading: false,
  error: null
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    // common
    case CLEAR_FORM:
      return {
        ...state,
        contractForm: {},
        serviceForm: {}
      };
    case OPEN_FORM:
      return {
        ...state,
        showForm: true,
      };
    
    case CLOSE_FORM:
      return {
        ...state,
        showForm: false,
      };

    case API_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case API_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
      
    // contract

    case GET_CONTRACT_SUCCESS:
      return {
        ...state,
        contracts: action.payload,
        loading: false,
      };
      
    case POST_CONTRACT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_CONTRACT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case GET_CONTRACT_BY_ID:
      return {
        ...state,
        contractForm: action.payload,
        showForm: true,
        loading: false,
      }; 
    
    case EDIT_CONTRACT_SUCCESS:
      return {
        ...state,
        loading: false,
      }; 

    // service
  
    case GET_SERVICE_SUCCESS:
      return {
        ...state,
        services: action.payload,
        loading: false,
      };
      
    case POST_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case GET_SERVICE_BY_ID:
      return {
        ...state,
        serviceForm: action.payload,
        showForm: true,
        loading: false,
      }; 
    
    case EDIT_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    
    default:
      return state;
  }
};

export default sampleReducer;