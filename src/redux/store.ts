import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './taskToDo';

export default configureStore({
    reducer: {
        toDos: taskReducer
    }
});