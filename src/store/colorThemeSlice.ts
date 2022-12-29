import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const isBrowserDefaultDark = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

if (!localStorage.getItem('colorTheme'))
  localStorage.setItem('colorTheme', isBrowserDefaultDark());

export const initialState =
  localStorage.getItem('colorTheme') || isBrowserDefaultDark();

export const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      localStorage.setItem('colorTheme', action.payload);
      return (state = action.payload);
    },
  },
});

export const { changeTheme } = colorThemeSlice.actions;
