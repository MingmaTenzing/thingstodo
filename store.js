import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import pendingTasksSlice from "./slices/pendingTasksSlice";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import clickedSlice from "slices/clickedSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  pendingtasks : pendingTasksSlice,
  clicked: clickedSlice

});

const presistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: presistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),

});
