import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight:25,
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    fontSize: 15,
    fontWeight: 700,
    borderRadius: 10,
    padding:10,
    background: 'white',
  }
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" style={styles.button} onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
