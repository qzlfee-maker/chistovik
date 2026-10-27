import React from 'react';
import { prices } from '../../../data/prices';
import { Section } from '../../layout/Section/Section';
import { TelegramLink } from '../../ui/TelegramLink/TelegramLink';
import { PriceRow } from './PriceRow';
import styles from './Prices.module.css';

export const Prices: React.FC = () => {
  return (
    <Section
      id="prices"
      title="Сколько стоит"
      subtitle="Базовые ориентиры по стоимости. Вы всегда знаете итоговую сумму до начала работы."
    >
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headRow}>
              <th scope="col" className={styles.headCell}>
                Услуга и детали
              </th>
              <th scope="col" className={styles.headCellRight}>
                Стоимость
              </th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item) => (
              <PriceRow key={item.service} item={item} />
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <p className={styles.note}>Точная цена зависит от сложности</p>
        <TelegramLink />
      </div>
    </Section>
  );
};
