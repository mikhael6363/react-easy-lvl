import React from 'react';
import styles from './StepInput.module.scss';

export const Step = (props) => {
  const { step, counterSetStep } = props;
  const stepHandler = ({ target: { value } }) => counterSetStep(value);
  return (
    <div className={styles.stepWrapper}>
      <span className={styles.inputName}>Step</span>
      <input
        className={styles.step}
        type='range'
        min='0'
        max='5'
        onChange={stepHandler}
        value={step}
      />
      <span>{step}</span>
    </div>
  );
};
