import React from 'react';
import { Section } from '../../layout/Section/Section';
import { TelegramLink } from '../../ui/TelegramLink/TelegramLink';
import { Step, StepData } from './Step';
import styles from './HowToOrder.module.css';

const steps: StepData[] = [
  {
    number: '01',
    title: 'Напишите',
    description:
      'Пришлите исходное фото, видео или расскажите своими словами, какую открытку или песню хотите получить.',
  },
  {
    number: '02',
    title: 'Обсудим',
    description:
      'Я сразу скажу точную цену и срок. Без скрытых доплат и навязывания лишних услуг.',
  },
  {
    number: '03',
    title: 'Получите',
    description:
      'Показываю готовый вариант. Если нужно что-то поправить - доводим до идеала и вы забираете чистовик.',
  },
];

export const HowToOrder: React.FC = () => {
  return (
    <Section
      id="how-to-order"
      title="Как заказать"
      subtitle="Никаких анкет и сложных брифов. Все общение идет напрямую в личной переписке."
    >
      <div className={styles.stepsGrid}>
        {steps.map((step) => (
          <Step key={step.number} step={step} />
        ))}
      </div>

      <div className={styles.ctaBox}>
        <div className={styles.ctaText}>
          <h3 className={styles.ctaTitle}>Готовы обсудить вашу задачу?</h3>
          <p className={styles.ctaSubtitle}>
            Пришлите исходник в Telegram - я посмотрю и отвечу в течение часа.
          </p>
        </div>
        <TelegramLink />
      </div>
    </Section>
  );
};
