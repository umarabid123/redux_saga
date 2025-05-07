import { createStore } from "redux";
import rootReducer from "./rootReducer";
import productSaga from "./saga";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer)
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga)
export default store;
