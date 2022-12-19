import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITodoItem {
  todoName: string;
  pomodoroNumber: number;
  timeStamp: number;
}

export const initialState: ITodoItem[] = [];
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoItem: (state, action: PayloadAction<ITodoItem>) => {
      state.unshift(action.payload);
    },
    removeTodoItem: (state) => {
      state.shift();
    },
    filterTodo: (state, action: PayloadAction<ITodoItem[]>) => {
      state = action.payload;
    },
  },
});

export const { addTodoItem, removeTodoItem, filterTodo } = todoSlice.actions;

export default todoSlice.reducer;
