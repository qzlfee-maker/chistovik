import React, { useState } from 'react';
import styles from './WorkCompareSlider.module.css';

type WorkCompareSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export const WorkCompareSlider: React.FC<WorkCompareSliderProps> = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className={styles.sliderContainer}>
      <img
        src={afterSrc}
        alt={afterAlt}
        className={styles.imageUnder}
        loading="lazy"
      />
      <div
        className={styles.imageOverWrapper}
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className={styles.imageOver}
          loading="lazy"
        />
      </div>

      <div
        className={styles.sliderLine}
        style={{ left: `${sliderPos}%` }}
        aria-hidden="true"
      >
        <div className={styles.sliderThumb}>
          <span>⟨⟩</span>
        </div>
      </div>

      <span className={`${styles.badge} ${styles.badgeBefore}`}>До</span>
      <span className={`${styles.badge} ${styles.badgeAfter}`}>После</span>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={handleSliderChange}
        className={styles.rangeInput}
        aria-label="Сравнение работы до и после"
      />
    </div>
  );
};
