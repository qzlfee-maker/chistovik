import React from 'react';
import { AspectType } from '../../ui/Placeholder/Placeholder';
import { WorkPlaceholder } from '../../ui/Placeholder/WorkPlaceholder';
import { WorkCompareSlider } from './WorkCompareSlider';
import { WorkAudioPlayer } from './WorkAudioPlayer';
import { WorkVideoPlayer } from './WorkVideoPlayer';
import styles from './Works.module.css';

export type WorkItemData = {
  index: number;
  title: string;
  category: string;
  beforeAfter: boolean;
  aspect: AspectType;
  spanClass: 'wide' | 'normal' | 'tall';
  beforeImage?: string;
  afterImage?: string;
  audioSrc?: string;
  audioSubtitle?: string;
  videoSrc?: string;
  imageSrc?: string;
};

type WorkItemProps = {
  item: WorkItemData;
};

export const WorkItem: React.FC<WorkItemProps> = ({ item }) => {
  const formattedIndex = String(item.index).padStart(2, '0');

  return (
    <figure className={`${styles.item} ${styles[item.spanClass]}`}>
      {item.imageSrc ? (
        <div className={styles.singleImageWrapper}>
          <img
            src={item.imageSrc}
            alt={item.title}
            className={styles.singleImage}
            loading="lazy"
          />
        </div>
      ) : item.videoSrc ? (
        <WorkVideoPlayer src={item.videoSrc} title={item.title} />
      ) : item.audioSrc ? (
        <WorkAudioPlayer
          src={item.audioSrc}
          title={item.title}
          subtitle={item.audioSubtitle}
          category={item.category}
        />
      ) : item.beforeImage && item.afterImage ? (
        <WorkCompareSlider
          beforeSrc={item.beforeImage}
          afterSrc={item.afterImage}
          beforeAlt={`${item.title} (до обработки)`}
          afterAlt={`${item.title} (после обработки)`}
        />
      ) : (
        <WorkPlaceholder
          index={item.index}
          title={item.title}
          beforeAfter={item.beforeAfter}
          aspect={item.aspect}
        />
      )}
      <figcaption className={styles.caption}>
        <span className={styles.captionTitle}>{item.title}</span>
        <span className={styles.captionMeta}>
          {formattedIndex} / {item.category}
        </span>
      </figcaption>
    </figure>
  );
};
