import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducer from "./Redux/Reducer.js";
import { thunk } from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
)
