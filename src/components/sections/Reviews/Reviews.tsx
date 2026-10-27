import React from 'react';
import { reviews } from '../../../data/reviews';
import { Section } from '../../layout/Section/Section';
import { ReviewCard } from './ReviewCard';
import styles from './Reviews.module.css';

export const Reviews: React.FC = () => {
  return (
    <Section
      id="reviews"
      title="Что говорят"
      subtitle="Реальные сообщения заказчиков из Telegram после сдачи работ."
    >
      <div className={styles.grid}>
        {reviews.map((review, idx) => (
          <ReviewCard key={review.screenshot || idx} review={review} index={idx + 1} />
        ))}
      </div>
    </Section>
  );
};
