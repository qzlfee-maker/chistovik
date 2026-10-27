import React, { useState } from 'react';
import styles from './HeroComparison.module.css';

type Mode = 'split' | 'slider';

export const HeroComparison: React.FC = () => {
  const [mode, setMode] = useState<Mode>('slider');
  const [sliderPos, setSliderPos] = useState<number>(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <figure className={styles.wrapper}>
      <div className={styles.topBar}>
        <span className={styles.kicker}>Пример ретуши и цветокоррекции</span>
        <div className={styles.modeSwitch} role="tablist" aria-label="Режим сравнения">
          <button
            type="button"
            className={`${styles.modeButton} ${mode === 'slider' ? styles.activeMode : ''}`}
            onClick={() => setMode('slider')}
            role="tab"
            aria-selected={mode === 'slider'}
          >
            Слайдер
          </button>
          <button
            type="button"
            className={`${styles.modeButton} ${mode === 'split' ? styles.activeMode : ''}`}
            onClick={() => setMode('split')}
            role="tab"
            aria-selected={mode === 'split'}
          >
            Рядом
          </button>
        </div>
      </div>

      {mode === 'slider' ? (
        <div className={styles.sliderContainer}>
          <img
            src="./hero/after.jpg"
            alt="После обработки: чистовик, естественный свет и цвет"
            className={styles.imageUnder}
            loading="eager"
          />
          <div
            className={styles.imageOverWrapper}
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src="./hero/before.jpg"
              alt="До обработки: черновик, холодный свет и шумы"
              className={styles.imageOver}
              loading="eager"
            />
          </div>

          <div
            className={styles.sliderLine}
            style={{ left: `${sliderPos}%` }}
            aria-hidden="true"
          >
            <div className={styles.sliderThumb}>
              <span className={styles.thumbArrow}>⟨</span>
              <span className={styles.thumbArrow}>⟩</span>
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
            aria-label="Сравнение до и после обработки"
          />
        </div>
      ) : (
        <div className={styles.splitContainer}>
          <div className={styles.splitPane}>
            <span className={`${styles.badge} ${styles.badgePane}`}>До</span>
            <img
              src="./hero/before.jpg"
              alt="Исходное фото до обработки"
              className={styles.splitImage}
              loading="eager"
            />
          </div>
          <div className={styles.splitPane}>
            <span className={`${styles.badge} ${styles.badgePane}`}>После</span>
            <img
              src="./hero/after.jpg"
              alt="Готовое фото после обработки"
              className={styles.splitImage}
              loading="eager"
            />
          </div>
        </div>
      )}

      <figcaption className={styles.caption}>
        <span>Черновик и чистовик. Потяните бегунок для сравнения деталей.</span>
      </figcaption>
    </figure>
  );
};
