import React, { useState } from 'react';
import { askPermission } from '../../utils/browserNotifications';
import styles from './instructions.scss';

export const Instructions = () => {
  const [isGranted, setIsGranted] = useState(
    Notification.permission === 'granted'
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>It is time to work:</h2>
      <ul className={styles.instructionsList}>
        <li className={styles.listItem}>Write the task description</li>
        <li className={styles.listItem}>
          Set the number of pomodoros needed to complete the task
        </li>
        <li className={styles.listItem}>
          You can edit the description or number of pomodoros later
        </li>
        <li className={styles.listItem}>
          You can drag the tasks around to reorder them
        </li>
        <li className={styles.listItem}>Start the timer</li>
        <li className={styles.listItem}>Work until the timer ends</li>
        <li className={styles.listItem}>
          In order to receive notifications press the &apos;Allow
          notifications&apos; button
        </li>
      </ul>
      <button
        onClick={() => {
          askPermission(setIsGranted);
        }}
        className={styles.notificationBtn}
        style={{
          display: `${isGranted ? 'none' : 'block'}`,
        }}
      >
        Allow notifications
      </button>
    </div>
  );
};
