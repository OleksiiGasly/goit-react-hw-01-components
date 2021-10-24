import PropTypes from 'prop-types';
import css from './Friend.module.css';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt="Аватар"
        width="44"
        height="44"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
