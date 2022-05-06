import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

const styles = {
  link: {
    fontSize:'20px',
    display: 'inline-block',
    textDecoration: 'none',
    marginLeft:25,
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
    textShadow: '4px 4px 15px rgba(255,255,255,1)',
  },
  activeLink: {
    color: '#E84A5F',
    
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
return ( <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Main
    </NavLink>

    {isLoggedIn &&
  (  <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Contacts
    </NavLink>)}
  </nav>)
};

export default Navigation;