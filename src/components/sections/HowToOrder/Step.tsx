import React from 'react';
import styles from './HowToOrder.module.css';

export type StepData = {
  number: string;
  title: string;
  description: string;
};

type StepProps = {
  step: StepData;
};

export const Step: React.FC<StepProps> = ({ step }) => {
  return (
    <div className={styles.stepCard}>
      <span className={styles.stepNumber}>{step.number}</span>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDescription}>{step.description}</p>
    </div>
  );
};
