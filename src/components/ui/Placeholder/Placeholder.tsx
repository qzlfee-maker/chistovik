import React from 'react';
import styles from './Placeholder.module.css';

export type PlaceholderType = 'hero' | 'work' | 'review';
export type AspectType = '4/3' | '3/4' | '16/9' | '1/1' | 'auto';

type PlaceholderProps = {
  type: PlaceholderType;
  label: string;
  aspect?: AspectType;
  beforeAfter?: boolean;
};

const aspectClassMap: Record<AspectType, string> = {
  '4/3': styles.aspect4x3,
  '3/4': styles.aspect3x4,
  '16/9': styles.aspect16x9,
  '1/1': styles.aspect1x1,
  auto: styles.aspectAuto,
};

export const Placeholder: React.FC<PlaceholderProps> = ({
  type,
  label,
  aspect = '4/3',
  beforeAfter = false,
}) => {
  const aspectClass = aspectClassMap[aspect];

  return (
    <div
      className={`${styles.placeholder} ${styles[type]} ${aspectClass}`}
      role="img"
      aria-label={label}
    >
      {beforeAfter ? (
        <div className={styles.beforeAfterContainer}>
          <div className={styles.half}>
            <span className={styles.badge}>До</span>
          </div>
          <div className={styles.verticalDivider} />
          <div className={styles.half}>
            <span className={styles.badge}>После</span>
          </div>
          <div className={styles.centerOverlay}>
            <span className={styles.label}>{label}</span>
          </div>
        </div>
      ) : (
        <div className={styles.singleContainer}>
          <span className={styles.label}>{label}</span>
        </div>
      )}
    </div>
  );
};
