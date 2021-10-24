import PropTypes from 'prop-types';
import css from './Transactions.module.css';

const Transaction = ({ type, amount, currency, id }) => {
  return (
    <tr className={css.tableText} key={id}>
      <td className={css.row}>{type}</td>
      <td className={css.row}>{amount}</td>
      <td className={css.row}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  id: PropTypes.string,
};

export default Transaction;
