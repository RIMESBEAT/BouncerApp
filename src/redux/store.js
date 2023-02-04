// import { createStore } from "redux"

import reducers from "./reducers/index"

// const store = createStore(reducers, {})

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: reducers });

export default store