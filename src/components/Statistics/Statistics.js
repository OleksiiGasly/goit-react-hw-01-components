import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatItem } from 'components/Statistics/StatItem';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h1 className={css.title}>{title}</h1>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default Statistics;
