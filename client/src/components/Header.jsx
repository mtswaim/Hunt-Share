import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'

export default function Header(props) {
  return (
    <header>
      <img id="hero-image" alt="" src={logo}></img>
      <h1><Link to='/' onClick={props.resetForm}>HuntShare</Link></h1>
      <div>
        {props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>logout</button>
          </>
          :
          <button onClick={props.handleLoginButton}>Login/register</button>
        }
      </div>
    </header>
  )
}