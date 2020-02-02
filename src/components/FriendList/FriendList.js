import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        <span
          className={`${styles.status} ${
            friend.isOnline ? styles.online : styles.offline
          }`}
        />
        <img className={styles.avatar} src={friend.avatar} alt={friend.alt} />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);
FriendList.defaultProps = {
  alt: 'user avatar',
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      alt: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
