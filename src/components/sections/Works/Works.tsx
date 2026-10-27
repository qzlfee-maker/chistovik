import React from 'react';
import { Section } from '../../layout/Section/Section';
import { WorkItem, WorkItemData } from './WorkItem';
import styles from './Works.module.css';

const workItems: WorkItemData[] = [
  {
    index: 1,
    title: 'Цветокоррекция и ретушь семейного фото с рыбалки',
    category: 'Ретушь до/после',
    beforeAfter: true,
    aspect: '3/4',
    spanClass: 'normal',
    beforeImage: './works/work-01-before.png',
    afterImage: './works/work-01-after.jpg',
  },
  {
    index: 2,
    title: 'Песня на заказ: «За чертой»',
    category: 'Аудио / Песня',
    beforeAfter: false,
    aspect: '3/4',
    spanClass: 'normal',
    audioSrc: './audio/custom-song.mp3',
    audioSubtitle: 'Оригинальный текст по личной истории, сведение и чистый вокал',
  },
  {
    index: 3,
    title: 'Создание короткометражного мультфильма',
    category: 'Анимация / Мультфильм',
    beforeAfter: false,
    aspect: '16/9',
    spanClass: 'normal',
    videoSrc: './video/sample-video.mp4',
  },
  {
    index: 4,
    title: 'Поздравительная открытка на День учителя',
    category: 'Дизайн открытки',
    beforeAfter: false,
    aspect: '3/4',
    spanClass: 'normal',
    imageSrc: './works/postcard-teacher.jpg',
  },
];

export const Works: React.FC = () => {
  return (
    <Section
      id="works"
      title="Работы"
      subtitle="Несколько примеров. Больше - в переписке"
    >
      {/* Чтобы вставить реальные работы, откройте WorkItem.tsx или замените слоты ниже на <img src="..." alt="..." loading="lazy" /> */}
      <div className={styles.grid}>
        {workItems.map((item) => (
          <WorkItem key={item.index} item={item} />
        ))}
      </div>
    </Section>
  );
};
