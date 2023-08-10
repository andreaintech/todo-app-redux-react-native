import {createSlice, nanoid} from "@reduxjs/toolkit";

type ToDoType = {
    id: string,
    name: string,
}

export const taskToDo = createSlice({
    name: 'toDos',
    initialState: [],
    reducers: {
        addToDo: (state: ToDoType[], action) => {
            const newToDo: ToDoType = {
                id: nanoid(),
                name: action.payload.toDo
            }
            state.push(newToDo);
        },
        deleteToDo: (state, action) => {
            return state.filter((toDo: ToDoType) => toDo.id !== action.payload.id);
        }
    }
})

export const {addToDo, deleteToDo} = taskToDo.actions;

export default taskToDo.reducer;