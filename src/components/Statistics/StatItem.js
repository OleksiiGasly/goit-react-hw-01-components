import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
export const StatItem = ({ id, label, percentage }) => {
  return (
    <li
      className={css.item}
      key={id}
      style={{ backgroundColor: getRandomColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
