import React from 'react'
import classes from './Login.module.css';
import { loginUrl } from '../../ConnectSpotify/SpotifyLogin';
import { FaSpotify } from 'react-icons/fa';
const Login = () => {
  return (
    <div className={classes.login}>
      <a href={loginUrl}>
        Login
        <FaSpotify size={'25px'} className={classes.icon} />
      </a>
    </div>

  )
}

export default Login