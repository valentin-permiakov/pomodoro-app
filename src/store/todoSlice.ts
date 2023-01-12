import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITodoItem {
  todoName: string;
  pomodoroNumber: number;
  timeStamp: number;
}
if (!localStorage.getItem('todoList'))
  localStorage.setItem('todoList', JSON.stringify([]));

export const initialState: ITodoItem[] = JSON.parse(
  localStorage.getItem('todoList') || ''
);
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoItem: (state, action: PayloadAction<ITodoItem>) => {
      state.unshift(action.payload);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    removeTodoItem: (state) => {
      state.shift();
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    filterTodo: (state, action: PayloadAction<number>) => {
      const newState = state.filter(
        (item) => item.timeStamp !== action.payload
      );
      localStorage.setItem('todoList', JSON.stringify(newState));
      return newState;
    },
    increasePomorodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(
        (item) => item.timeStamp === action.payload
      );
      state[index].pomodoroNumber += 1;
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    decreasePomorodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(
        (item) => item.timeStamp === action.payload
      );
      if (state[index].pomodoroNumber > 1) {
        state[index].pomodoroNumber -= 1;
        localStorage.setItem('todoList', JSON.stringify(state));
      }
    },
    changeTask: (
      state,
      action: PayloadAction<{ timestamp: number; text: string }>
    ) => {
      const index = state.findIndex(
        (item) => item.timeStamp === action.payload.timestamp
      );
      state[index].todoName = action.payload.text;
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    sortTodoList: (state, action: PayloadAction<ITodoItem[]>) => {
      localStorage.setItem('todoList', JSON.stringify(action.payload));
      return (state = action.payload);
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
  sortTodoList,
} = todoSlice.actions;

export default todoSlice.reducer;
