import React from 'react';
import styles from './AutoClicker.module.scss';

export const AutoClicker = (props) => {
  const { isRunning, start, stop } = props;
  const stopHandler = () => stop();
  const startHandler = () => start();
  return (
    <div className={styles.autoclickWrapper}>
      <p>Autoclick</p>
      {isRunning ? (
        <button className={styles.autoclickBtn} onClick={stopHandler}>
          Stop
        </button>
      ) : (
        <button className={styles.autoclickBtn} onClick={startHandler}>
          Start
        </button>
      )}
    </div>
  );
};
