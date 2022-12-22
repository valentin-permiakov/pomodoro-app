import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITodoItem {
  todoName: string;
  pomodoroNumber: number;
  timeStamp: number;
}

export const initialState: ITodoItem[] = [
  {
    todoName: 'test',
    pomodoroNumber: 2,
    timeStamp: 29292,
  },
];
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
    filterTodo: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.timeStamp !== action.payload);
    },
    increasePomorodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(
        (item) => item.timeStamp === action.payload
      );
      state[index].pomodoroNumber += 1;
    },
    decreasePomorodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(
        (item) => item.timeStamp === action.payload
      );
      if (state[index].pomodoroNumber > 1) state[index].pomodoroNumber -= 1;
    },
    changeTask: (
      state,
      action: PayloadAction<{ timestamp: number; text: string }>
    ) => {
      const index = state.findIndex(
        (item) => item.timeStamp === action.payload.timestamp
      );
      state[index].todoName = action.payload.text;
    },
  },
});

export const {
  addTodoItem,
  removeTodoItem,
  filterTodo,
  increasePomorodo,
  decreasePomorodo,
  changeTask,
} = todoSlice.actions;

export default todoSlice.reducer;
