import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.reducer";

const store = configureStore(rootReducer);
export default store