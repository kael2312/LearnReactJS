import { combineReducers } from "redux";
import hobbyReducer from "./hobby.reducer";
import userReducer from "./user.reducer";

const rootReducer = {
    reducer: {
        hobbyReducer: hobbyReducer,
        userReducer: userReducer
    }
}

export default rootReducer