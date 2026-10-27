import React from 'react';
import { Placeholder } from './Placeholder';

export const HeroPlaceholder: React.FC = () => {
  return (
    /* Замените Placeholder на <img src="..." alt="..." /> */
    <Placeholder
      type="hero"
      label="Главный пример работы. Замените на изображение"
      aspect="4/3"
      beforeAfter={true}
    />
  );
};
