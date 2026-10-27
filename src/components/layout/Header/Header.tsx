import React, { useState, useEffect } from 'react';
import { site } from '../../../config/site';
import { TelegramLink } from '../../ui/TelegramLink/TelegramLink';
import { Close } from '../../../icons/Close';
import styles from './Header.module.css';

const navItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#works' },
  { label: 'Цены', href: '#prices' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Как заказать', href: '#how-to-order' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`.trim()}
    >
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          {site.name}
        </a>

        <nav className={styles.desktopNav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.desktopAction}>
          <TelegramLink />
        </div>

        <button
          type="button"
          className={styles.burgerButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {isMenuOpen ? (
            <Close size={24} />
          ) : (
            <span className={styles.burgerLines} aria-hidden="true">
              <span className={styles.line} />
              <span className={styles.line} />
              <span className={styles.line} />
            </span>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav aria-label="Мобильная навигация">
            <ul className={styles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.mobileAction} onClick={closeMenu}>
            <TelegramLink className={styles.fullWidthLink} />
          </div>
        </div>
      )}
    </header>
  );
};
