import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.tableHeads}>
      <tr>
        <th className={styles.tH}>Amount</th>
        <th className={styles.tH}>Type</th>
        <th className={styles.tH}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styles.tR}>
          <td className={styles.tH}>{item.type}</td>
          <td className={styles.tH}>{item.amount}</td>
          <td className={styles.tH}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
