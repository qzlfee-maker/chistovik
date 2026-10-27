import React from 'react';
import { site } from '../../../config/site';
import { Telegram } from '../../../icons/Telegram';
import styles from './Footer.module.css';

const footerLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#works' },
  { label: 'Цены', href: '#prices' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Как заказать', href: '#how-to-order' },
];

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <a href="#" className={styles.logo}>
            {site.name}
          </a>

          <nav aria-label="Навигация в подвале">
            <ul className={styles.navList}>
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={site.telegramUrl}
            target="_blank"
            rel="noopener"
            className={styles.telegramIconLink}
            aria-label="Написать в Telegram"
          >
            <Telegram size={20} />
          </a>
        </div>

        <div className={styles.bottomRow}>
          <span className={styles.meta}>
            {site.name}, {site.year}
          </span>
        </div>
      </div>
    </footer>
  );
};
