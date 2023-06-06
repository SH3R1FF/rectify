import React from 'react'
import {Outlet,Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
      <>
      <header>
        
        <div className="container">
          <h1>{props.title}</h1>
        </div>

        <nav>
            <ul className='nav_links'>
              <li>
                <Link to="/">Home</Link> 
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
        </nav>
          
      </header>
      <Outlet/>
      
    </>
  )
}
