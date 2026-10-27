import React from 'react';
import { AspectType, Placeholder } from './Placeholder';

type WorkPlaceholderProps = {
  index: number;
  title: string;
  beforeAfter?: boolean;
  aspect?: AspectType;
};

export const WorkPlaceholder: React.FC<WorkPlaceholderProps> = ({
  index,
  title,
  beforeAfter = false,
  aspect = '4/3',
}) => {
  const formattedIndex = String(index).padStart(2, '0');

  return (
    /* Замените Placeholder на <img src="..." alt="..." /> */
    <Placeholder
      type="work"
      label={`Работа ${formattedIndex}: ${title}`}
      aspect={aspect}
      beforeAfter={beforeAfter}
    />
  );
};
