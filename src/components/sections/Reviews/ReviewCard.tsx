import React from 'react';
import { Review } from '../../../types';
import styles from './Reviews.module.css';

type ReviewCardProps = {
  review: Review;
  index: number;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, index }) => {
  const formattedIndex = String(index).padStart(2, '0');

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.reviewIndex}>{formattedIndex}</span>
        <span className={styles.serviceBadge}>{review.service}</span>
      </div>

      {review.screenshot && (
        <div className={styles.screenshotFrame}>
          <img
            src={review.screenshot}
            alt={review.caption || `Скриншот отзыва ${index}`}
            className={styles.screenshotImage}
            loading="lazy"
          />
        </div>
      )}

      <div className={styles.cardFooter}>
        <p className={styles.quoteText}>«{review.text}»</p>
      </div>
    </article>
  );
};
