import React from 'react';
import { motion } from 'framer-motion';
import { site } from '../../../config/site';
import { Button } from '../../ui/Button/Button';
import { HeroComparison } from './HeroComparison';
import { ArrowDown } from '../../../icons/ArrowDown';
import styles from './Hero.module.css';

const facts = [
  {
    number: '01',
    title: 'Ручная работа с деталями',
    text: 'Никаких автоматических фильтров наугад - каждый заказ доводится вручную.',
  },
  {
    number: '02',
    title: 'Сроки до 5 дней',
    text: 'Большинство задач по фото и открыткам готовы в день обращения или на следующее утро.',
  },
  {
    number: '03',
    title: 'Правки до результата',
    text: 'Спокойно обсуждаем детали и доводим работу до состояния, которое вам нравится.',
  },
];

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.mainGrid}>
          <div className={styles.leftColumn}>
            <span className={styles.kicker}>Мастерская цифрового ремесла</span>
            <h1 className={styles.title}>{site.tagline}</h1>
            <p className={styles.subtitle}>
              Обработка фото, открытки, песни на заказ. Довожу до готового -
              аккуратно и в срок
            </p>
            <div className={styles.actions}>
              <Button variant="primary" as="a" href="#works">
                <span>Посмотреть работы</span>
                <ArrowDown size={16} />
              </Button>
              <Button variant="outline" as="a" href="#prices">
                Узнать цены
              </Button>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <HeroComparison />
          </div>
        </div>

        <div className={styles.factsRow}>
          {facts.map((fact) => (
            <div key={fact.number} className={styles.factItem}>
              <span className={styles.factNumber}>{fact.number}</span>
              <h2 className={styles.factTitle}>{fact.title}</h2>
              <p className={styles.factText}>{fact.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
