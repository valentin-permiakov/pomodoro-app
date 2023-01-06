import React from 'react';
import { Highlight } from './Highlight/Highlight';
import styles from './highlights-container.scss';

export const HighlightsContainer = () => {
  return (
    <section className={styles.highlightsSection}>
      <Highlight
        name="Фокус"
        content="23%"
        icon="focusIcon"
        bgColor="#FFDDA9"
        iconColor="#FFAE35"
      />
      <Highlight
        name="Время на паузе"
        content="10м"
        icon="pauseIcon"
        bgColor="#DFDCFE"
        iconColor="#9C97D7"
      />
      <Highlight
        name="Остановки"
        content="0"
        icon="stopIcon"
        bgColor=""
        iconColor=""
      />
    </section>
  );
};
