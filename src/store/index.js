import { legacy_createStore as createStore, applyMiddleware } from "redux";
// const { createStore } = require("redux");
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;
