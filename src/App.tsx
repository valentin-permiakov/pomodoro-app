import React from 'react';
import { Content } from './Content';
import { Header } from './Header';
import { TimerContainer } from './TimerContainer';
import { TodoContainer } from './TodoContainer';
import './styles/main.global.scss';

export const App = () => {
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
