import React from 'react';
import { Content } from './Content';
import { Header } from './Header';
import { TimerContainer } from './TimerContainer';
import { TodoContainer } from './TodoContainer';
import './styles/main.global.scss';
import './styles/_variables.scss';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

export const App = () => {
  const theme = useSelector((state: RootState) => state.colorTheme);

  document.documentElement.setAttribute('data-theme', theme);
  return (
    <>
      <Header />
      <Content>
        <TodoContainer />
        <TimerContainer />
      </Content>
    </>
  );
};
