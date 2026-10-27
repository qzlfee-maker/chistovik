import React from 'react';
import { services } from '../../../data/services';
import { Section } from '../../layout/Section/Section';
import { ServiceCard } from './ServiceCard';
import styles from './Services.module.css';

export const Services: React.FC = () => {
  return (
    <Section
      id="services"
      title="Что я делаю"
      subtitle="Беру исходники в любом состоянии и довожу их до чистового вида - чтобы не стыдно подарить, распечатать или сохранить в семейный архив."
    >
      <div className={styles.grid}>
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </Section>
  );
};
