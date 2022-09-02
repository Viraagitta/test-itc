// import { legacy_createStore as createStore } from "redux";
import {
  DATA_FETCH_SUCCESS,
  DELETE_DATA,
  DETAIL_DATA_ID,
  NEW_DATA,
  UPDATE_DATA,
} from "../actions/actiontype";
const initialState = { data: [], detailData: [] };
function dataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return { ...state, data: action.payload };
    case DETAIL_DATA_ID:
      return { ...state, detailData: action.payload };
    case NEW_DATA:
      return { ...state, data: action.payload };
    case UPDATE_DATA:
      return { ...state, detailData: action.payload };
    case DELETE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default dataReducer;
