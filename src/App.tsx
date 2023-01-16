import React from 'react';
import { Content } from './Content';
import { Header } from './Header';
import { TimerContainer } from './TimerContainer';
import { TodoContainer } from './TodoContainer';
import './styles/main.global.scss';
import './styles/_variables.scss';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Statistics } from './Statistics';

export const App = () => {
  const theme = useSelector((state: RootState) => state.colorTheme);

  document.documentElement.setAttribute('data-theme', theme);
  return (
    <BrowserRouter>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Navigate to="/pomodoro-app" />} />
          <Route
            path="/pomodoro-app"
            element={
              <>
                <TodoContainer />
                <TimerContainer />
              </>
            }
          />
          <Route path="pomodoro-app/statistscs" element={<Statistics />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
};
