import React from 'react'
import './Home.css'
import {useDispatch} from 'react-redux'
import { logOut } from '../../actions/AuthAction'


const Home = () => {
  const dispatch = useDispatch()

  const handleLogOut = ()=>{
    dispatch(logOut())
  }

  return (
    <div className="home">
      <button className="button logoutButton" onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default Home