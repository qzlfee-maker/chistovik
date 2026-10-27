import React from 'react';
import { site } from '../../../config/site';
import { Telegram } from '../../../icons/Telegram';
import styles from './TelegramLink.module.css';

type TelegramLinkProps = {
  className?: string;
};

export const TelegramLink: React.FC<TelegramLinkProps> = ({ className = '' }) => {
  return (
    <a
      href={site.telegramUrl}
      target="_blank"
      rel="noopener"
      className={`${styles.link} ${className}`.trim()}
    >
      <Telegram size={18} />
      <span>Написать в Telegram</span>
    </a>
  );
};
