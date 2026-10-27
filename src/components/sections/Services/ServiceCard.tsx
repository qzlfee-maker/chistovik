import React from 'react';
import { Service } from '../../../types';
import { site } from '../../../config/site';
import { Button } from '../../ui/Button/Button';
import styles from './Services.module.css';

type ServiceCardProps = {
  service: Service;
  index: number;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.number}>{formattedNumber}</span>
        <h3 className={styles.cardTitle}>{service.title}</h3>
      </div>

      <p className={styles.description}>{service.description}</p>

      <ul className={styles.featureList}>
        {service.features.map((feature) => (
          <li key={feature} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>

      <div className={styles.cardFooter}>
        <Button
          variant="ghost"
          as="a"
          href={site.telegramUrl}
          target="_blank"
          rel="noopener"
        >
          Обсудить задачу в Telegram
        </Button>
      </div>
    </article>
  );
};
