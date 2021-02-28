import React from 'react';
import { useState } from 'react';
import { Step } from '../Step';
import { AutoClicker } from '../Autoclicker';
import styles from '../Counter.module.scss';

export const CounterSettings = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const { step, counterSetStep, isRunning, start, stop } = props;
  return (
    <>
      <button
        className={`${styles.btn} ${styles.setBtns} ${styles.settingsBtn}`}
        onClick={() => setIsVisible(!isVisible)}
        title='Settings'
      >
        <i className='fas fa-cog'></i>
      </button>

      {!isVisible ? (
        <div className={styles.settingsWrapper}>
          <Step step={step} counterSetStep={counterSetStep} />
          <AutoClicker
            isRunning={isRunning}
            start={start}
            stop={stop}
          />
        </div>
      ) : null}
    </>
  );
};
