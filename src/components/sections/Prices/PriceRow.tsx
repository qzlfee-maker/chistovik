import React from 'react';
import { Price } from '../../../types';
import styles from './Prices.module.css';

type PriceRowProps = {
  item: Price;
};

export const PriceRow: React.FC<PriceRowProps> = ({ item }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.serviceCell}>
        <span className={styles.serviceName}>{item.service}</span>
        {item.note && <span className={styles.serviceNote}>{item.note}</span>}
      </td>
      <td className={styles.priceCell}>{item.price}</td>
    </tr>
  );
};
