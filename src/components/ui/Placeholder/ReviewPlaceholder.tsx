import React from 'react';
import { reviews } from '../../../data/reviews';
import styles from './Placeholder.module.css';

type ReviewPlaceholderProps = {
  index: number;
};

export const ReviewPlaceholder: React.FC<ReviewPlaceholderProps> = ({ index }) => {
  const review = reviews[index - 1] ?? {
    name: `Имя клиента ${index}`,
    text: `Отзыв ${index}. Текст будет добавлен`,
    service: 'Услуга',
  };

  return (
    <div
      className={`${styles.placeholder} ${styles.review}`}
      aria-label={`Плейсхолдер отзыва ${index}`}
    >
      <div className={styles.singleContainer}>
        <span className={styles.badge}>{review.service}</span>
        <p className={styles.label}>{review.text}</p>
        <span className={styles.badge}>{review.name}</span>
      </div>
    </div>
  );
};
